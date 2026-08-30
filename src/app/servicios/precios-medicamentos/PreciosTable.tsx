/* eslint-disable @typescript-eslint/no-explicit-any, react-hooks/set-state-in-effect, react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';
import styles from './Precios.module.css';

interface Medicamento {
  principio_activo: string;
  unidad_de_dispensacion: string;
  concentracion: string;
  unidad_base: string;
  nombre_comercial: string;
  fabricante: string;
  precio_por_tableta: string;
  factoresprecio: string;
  numerofactor: string;
  ':id'?: string;
}

export default function PreciosTable() {
  const [data, setData] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pedimos más datos (ej. 300) para que la paginación se note
        const response = await fetch('https://www.datos.gov.co/api/v3/views/3t73-n4q9/query.json?$limit=300');
        if (!response.ok) throw new Error('Error al cargar datos');
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Reset page when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const filteredData = data.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      (item.principio_activo && item.principio_activo.toLowerCase().includes(term)) ||
      (item.nombre_comercial && item.nombre_comercial.toLowerCase().includes(term)) ||
      (item.fabricante && item.fabricante.toLowerCase().includes(term))
    );
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className={styles.tableContainerBox}>
      <div className={styles.tableHeaderArea}>
        <div className={styles.tableSearchBox}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#024F90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginRight: '12px' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="Buscar por principio activo, medicamento o fabricante..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.tableSearchInput}
          />
        </div>
        <div className={styles.tableStatsBadge}>
          Mostrando {filteredData.length} resultados
        </div>
      </div>

      <div className={styles.modernTableWrapper}>
        {loading ? (
          <div className={styles.loadingStateArea}>
            <div className={styles.tableSpinner}></div>
            <p>Cargando datos desde GOV.CO...</p>
          </div>
        ) : error ? (
          <div className={styles.errorStateArea}>
            <p>{error}</p>
          </div>
        ) : (
          <table className={styles.modernDataTable}>
            <thead>
              <tr>
                <th>Principio Activo</th>
                <th>Nombre Comercial</th>
                <th>Concentración</th>
                <th>Unidad Base</th>
                <th>Unidad de Disp.</th>
                <th>Fabricante</th>
                <th>Precio / Tableta</th>
                <th>Factor Precio</th>
                <th>N° Factor</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, idx) => (
                <tr key={item[':id'] || idx}>
                  <td className={styles.tableFw600}>{item.principio_activo || '-'}</td>
                  <td style={{ color: '#0A1628' }}>{item.nombre_comercial || '-'}</td>
                  <td className={styles.tableTextMuted}>{item.concentracion || '-'}</td>
                  <td className={styles.tableTextMuted}>{item.unidad_base || '-'}</td>
                  <td className={styles.tableTextMuted}>{item.unidad_de_dispensacion || '-'}</td>
                  <td>{item.fabricante || '-'}</td>
                  <td className={styles.tablePriceCell}>
                    {item.precio_por_tableta 
                      ? new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(parseFloat(item.precio_por_tableta))
                      : '-'}
                  </td>
                  <td>
                    <span className={`${styles.statusBadge} ${item.factoresprecio === 'Alto' ? styles.statusBadgeRed : item.factoresprecio === 'Medio' ? styles.statusBadgeYellow : styles.statusBadgeGreen}`}>
                      {item.factoresprecio || '-'}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.numerofactor || '-'}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={9} className={styles.tableEmptyState}>No se encontraron resultados para "{searchTerm}"</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {!loading && !error && filteredData.length > 0 && (
        <div className={styles.pagination}>
          <button 
            className={styles.pageBtn} 
            onClick={goToPrevPage} 
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              // Limit the number of displayed page buttons logic
              if (
                pageNumber === 1 ||
                pageNumber === totalPages ||
                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNumber}
                    className={`${styles.pageNumberBtn} ${currentPage === pageNumber ? styles.activePage : ''}`}
                    onClick={() => goToPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              }
              // Show ellipses
              if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                return <span key={pageNumber} className={styles.pageEllipsis}>...</span>;
              }
              return null;
            })}
          </div>

          <button 
            className={styles.pageBtn} 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

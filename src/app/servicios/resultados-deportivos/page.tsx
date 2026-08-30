/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './Deportes.module.css';
import { Trophy, CalendarDays, BarChart3, Users, Star } from 'lucide-react';

interface Team {
  id: string;
  name: string;
  logo: string;
  score: string;
}

interface Match {
  id: string;
  league: string;
  date: string;
  status: string;
  statusText: string;
  homeTeam: Team;
  awayTeam: Team;
  venue: string;
}

interface StandingTeam {
  team: {
    id: string;
    name: string;
    logo: string;
  };
  stats: {
    rank: number;
    points: number;
    gamesPlayed: number;
    wins: number;
    draws: number;
    losses: number;
    goalDifference: number;
  };
}

interface StandingGroup {
  name: string;
  standings: StandingTeam[];
}

// Mock Data for Bracket
const mockBracket = {
  quarterFinals: [
    { id: 'q1', home: { name: 'Real Madrid', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png', score: 3 }, away: { name: 'Man City', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/382.png', score: 2 } },
    { id: 'q2', home: { name: 'Bayern', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/132.png', score: 1 }, away: { name: 'Arsenal', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/359.png', score: 0 } },
    { id: 'q3', home: { name: 'PSG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/160.png', score: 4 }, away: { name: 'Barcelona', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/83.png', score: 1 } },
    { id: 'q4', home: { name: 'Atlético', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/1068.png', score: 2 }, away: { name: 'Dortmund', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/124.png', score: 4 } },
  ],
  semiFinals: [
    { id: 's1', home: { name: 'Real Madrid', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png', score: 2 }, away: { name: 'Bayern', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/132.png', score: 1 } },
    { id: 's2', home: { name: 'PSG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/160.png', score: 0 }, away: { name: 'Dortmund', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/124.png', score: 1 } },
  ],
  final: [
    { id: 'f1', home: { name: 'Real Madrid', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png', score: 2 }, away: { name: 'Dortmund', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/124.png', score: 0 } },
  ]
};

// Mock Data for Top Players
const mockPlayers = [
  { id: 1, name: 'Vinícius Júnior', team: 'Real Madrid', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png', goals: 6, assists: 5, rating: 8.5 },
  { id: 2, name: 'Kylian Mbappé', team: 'PSG', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/160.png', goals: 8, assists: 0, rating: 8.3 },
  { id: 3, name: 'Harry Kane', team: 'Bayern', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/132.png', goals: 8, assists: 4, rating: 8.2 },
  { id: 4, name: 'Jude Bellingham', team: 'Real Madrid', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/86.png', goals: 4, assists: 4, rating: 8.1 },
  { id: 5, name: 'Phil Foden', team: 'Man City', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/382.png', goals: 5, assists: 3, rating: 7.9 },
  { id: 6, name: 'Antoine Griezmann', team: 'Atlético', logo: 'https://a.espncdn.com/i/teamlogos/soccer/500/1068.png', goals: 6, assists: 1, rating: 7.8 },
];

export default function ResultadosDeportivosPage() {
  const [activeTab, setActiveTab] = useState('partidos');
  const [matches, setMatches] = useState<Match[]>([]);
  const [standings, setStandings] = useState<StandingGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Ligas a consultar
        const leagues = [
          { id: 'uefa.champions', name: 'Champions League' },
          { id: 'eng.1', name: 'Premier League' },
          { id: 'esp.1', name: 'La Liga' }
        ];

        // Fetch Matches
        const matchesPromises = leagues.map(async (league) => {
          try {
            const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/soccer/${league.id}/scoreboard`);
            const json = await res.json();
            if (json && json.events) {
              return json.events.map((event: any) => {
                const home = event.competitions[0].competitors.find((c: any) => c.homeAway === 'home');
                const away = event.competitions[0].competitors.find((c: any) => c.homeAway === 'away');
                return {
                  id: event.id,
                  league: league.name,
                  date: event.date,
                  status: event.status.type.name,
                  statusText: event.status.type.shortDetail,
                  venue: event.competitions[0].venue?.fullName || 'Estadio por definir',
                  homeTeam: { id: home.id, name: home.team.shortDisplayName || home.team.name, logo: home.team.logo, score: home.score || '0' },
                  awayTeam: { id: away.id, name: away.team.shortDisplayName || away.team.name, logo: away.team.logo, score: away.score || '0' }
                };
              });
            }
            return [];
          } catch (e) { return []; }
        });

        // Fetch Standings (Only for Champions League as example)
        let groupStandings: StandingGroup[] = [];
        try {
          const res = await fetch('https://site.api.espn.com/apis/v2/sports/soccer/uefa.champions/standings');
          const json = await res.json();
          if (json && json.children) {
            // Some ESPN logic: the children array usually contains groups
            groupStandings = json.children.map((group: any) => {
              const standings = group.standings?.entries?.map((entry: any) => {
                const getStat = (name: string) => entry.stats.find((s: any) => s.name === name)?.value || 0;
                return {
                  team: { id: entry.team.id, name: entry.team.shortDisplayName, logo: entry.team.logos?.[0]?.href },
                  stats: {
                    rank: getStat('rank'),
                    points: getStat('points'),
                    gamesPlayed: getStat('gamesPlayed'),
                    wins: getStat('wins'),
                    draws: getStat('ties'),
                    losses: getStat('losses'),
                    goalDifference: getStat('pointDifferential')
                  }
                };
              });
              return { name: group.name, standings: standings || [] };
            }).filter((g: any) => g.standings.length > 0);
          }
        } catch (e) {}

        const matchesResults = await Promise.all(matchesPromises);
        const allMatches = matchesResults.flat();
        
        // Sorting matches
        allMatches.sort((a, b) => {
          if (a.status.includes('IN_PROGRESS') && !b.status.includes('IN_PROGRESS')) return -1;
          if (!a.status.includes('IN_PROGRESS') && b.status.includes('IN_PROGRESS')) return 1;
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

        setMatches(allMatches);
        setStandings(groupStandings);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const liveMatches = matches.filter(m => m.status.includes('IN_PROGRESS') || m.status === 'STATUS_HALFTIME');
  const finishedMatches = matches.filter(m => m.status.includes('FINAL'));
  const scheduledMatches = matches.filter(m => !m.status.includes('IN_PROGRESS') && !m.status.includes('FINAL'));

  const renderMatchCard = (match: Match, i: number) => (
    <motion.div
      key={match.id}
      className={styles.card}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.5) }}
    >
      <div className={styles.cardHeader}>
        <span className={styles.league}>{match.league}</span>
        <span className={`${styles.status} ${
          match.status.includes('IN_PROGRESS') ? styles.status_live : 
          match.status.includes('FINAL') ? styles.status_finished : styles.status_scheduled
        }`}>
          {match.status.includes('IN_PROGRESS') ? `EN VIVO ${match.statusText}` :
           match.status.includes('FINAL') ? 'FINALIZADO' :
           new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).format(new Date(match.date))}
        </span>
      </div>
      
      <div className={styles.matchup}>
        <div className={styles.team}>
          <img src={match.homeTeam.logo} alt={match.homeTeam.name} className={styles.logo} loading="lazy" />
          <span className={styles.teamName}>{match.homeTeam.name}</span>
        </div>
        
        <div className={styles.scoreContainer}>
          <span className={styles.score}>{match.status.includes('SCHEDULED') ? '-' : match.homeTeam.score}</span>
          <span className={styles.scoreDivider}>:</span>
          <span className={styles.score}>{match.status.includes('SCHEDULED') ? '-' : match.awayTeam.score}</span>
        </div>

        <div className={styles.team}>
          <img src={match.awayTeam.logo} alt={match.awayTeam.name} className={styles.logo} loading="lazy" />
          <span className={styles.teamName}>{match.awayTeam.name}</span>
        </div>
      </div>
    </motion.div>
  );

  const BracketMatch = ({ match }: { match: any }) => (
    <div className={styles.bracketMatch}>
      <div className={`${styles.bracketTeam} ${match.home.score > match.away.score ? styles.bracketWinner : ''}`}>
        <img src={match.home.logo} alt={match.home.name} className={styles.bracketLogo} />
        <span className={styles.bracketName}>{match.home.name}</span>
        <span className={styles.bracketScore}>{match.home.score}</span>
      </div>
      <div className={`${styles.bracketTeam} ${match.away.score > match.home.score ? styles.bracketWinner : ''}`}>
        <img src={match.away.logo} alt={match.away.name} className={styles.bracketLogo} />
        <span className={styles.bracketName}>{match.away.name}</span>
        <span className={styles.bracketScore}>{match.away.score}</span>
      </div>
    </div>
  );

  return (
    <SmoothScroll>
      <Navbar />
      <main className={styles.section}>
        <div className={styles.bgGlow}></div>
        <div className={styles.bgGlow2}></div>
        
        <div className={styles.container}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.title}>
              Resultados <span className={styles.highlight}>Deportivos</span>
            </h1>
            <p className={styles.subtitle}>
              Sigue la emoción del fútbol con resultados en vivo, tablas de clasificación, eliminatorias y los jugadores más destacados.
            </p>
          </motion.div>

          <div className={styles.tabsContainer}>
            <button className={`${styles.tabBtn} ${activeTab === 'partidos' ? styles.activeTab : ''}`} onClick={() => setActiveTab('partidos')}>
              <CalendarDays size={18} /> Partidos
            </button>
            <button className={`${styles.tabBtn} ${activeTab === 'grupos' ? styles.activeTab : ''}`} onClick={() => setActiveTab('grupos')}>
              <BarChart3 size={18} /> Fase de Grupos
            </button>
            <button className={`${styles.tabBtn} ${activeTab === 'eliminatorias' ? styles.activeTab : ''}`} onClick={() => setActiveTab('eliminatorias')}>
              <Trophy size={18} /> Eliminatorias
            </button>
            <button className={`${styles.tabBtn} ${activeTab === 'jugadores' ? styles.activeTab : ''}`} onClick={() => setActiveTab('jugadores')}>
              <Star size={18} /> Destacados
            </button>
          </div>

          {loading ? (
            <div className={styles.loader}>
              <div className={styles.spinner}></div>
              <p>Conectando con el estadio...</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              
              {/* TAB: PARTIDOS */}
              {activeTab === 'partidos' && (
                <motion.div key="partidos" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {liveMatches.length > 0 && (
                    <div className={styles.matchSection}>
                      <h2 className={styles.sectionTitle}><span className={styles.liveIndicator}></span> En Vivo</h2>
                      <div className={styles.grid}>{liveMatches.map((m, i) => renderMatchCard(m, i))}</div>
                    </div>
                  )}
                  {finishedMatches.length > 0 && (
                    <div className={styles.matchSection}>
                      <h2 className={styles.sectionTitle}>Resultados Finales</h2>
                      <div className={styles.grid}>{finishedMatches.map((m, i) => renderMatchCard(m, i))}</div>
                    </div>
                  )}
                  {scheduledMatches.length > 0 && (
                    <div className={styles.matchSection}>
                      <h2 className={styles.sectionTitle}>Próximos Encuentros</h2>
                      <div className={styles.grid}>{scheduledMatches.map((m, i) => renderMatchCard(m, i))}</div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* TAB: GRUPOS */}
              {activeTab === 'grupos' && (
                <motion.div key="grupos" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className={styles.standingsGrid}>
                    {standings.length > 0 ? standings.map((group, i) => (
                      <div key={i} className={styles.groupTable}>
                        <h3 className={styles.groupName}>{group.name}</h3>
                        <table className={styles.table}>
                          <thead>
                            <tr>
                              <th>Pos</th>
                              <th>Equipo</th>
                              <th>PJ</th>
                              <th>V</th>
                              <th>E</th>
                              <th>D</th>
                              <th>DG</th>
                              <th>Pts</th>
                            </tr>
                          </thead>
                          <tbody>
                            {group.standings.map((row, j) => (
                              <tr key={j}>
                                <td>{j + 1}</td>
                                <td className={styles.teamCol}>
                                  <img src={row.team.logo} alt="" className={styles.smallLogo} />
                                  <span>{row.team.name}</span>
                                </td>
                                <td>{row.stats.gamesPlayed}</td>
                                <td>{row.stats.wins}</td>
                                <td>{row.stats.draws}</td>
                                <td>{row.stats.losses}</td>
                                <td>{row.stats.goalDifference > 0 ? `+${row.stats.goalDifference}` : row.stats.goalDifference}</td>
                                <td className={styles.ptsCol}>{row.stats.points}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )) : (
                      <div className={styles.emptyState}>No hay datos de clasificación disponibles en este momento.</div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* TAB: ELIMINATORIAS */}
              {activeTab === 'eliminatorias' && (
                <motion.div key="eliminatorias" className={styles.bracketContainer} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  <div className={styles.bracketStage}>
                    <h3 className={styles.stageTitle}>Cuartos de Final</h3>
                    <div className={styles.bracketMatches}>
                      {mockBracket.quarterFinals.map(m => <BracketMatch key={m.id} match={m} />)}
                    </div>
                  </div>
                  <div className={styles.bracketConnectors}></div>
                  <div className={styles.bracketStage}>
                    <h3 className={styles.stageTitle}>Semifinales</h3>
                    <div className={`${styles.bracketMatches} ${styles.semiGap}`}>
                      {mockBracket.semiFinals.map(m => <BracketMatch key={m.id} match={m} />)}
                    </div>
                  </div>
                  <div className={styles.bracketConnectors}></div>
                  <div className={styles.bracketStage}>
                    <h3 className={styles.stageTitle}>Final</h3>
                    <div className={`${styles.bracketMatches} ${styles.finalGap}`}>
                      {mockBracket.final.map(m => <BracketMatch key={m.id} match={m} />)}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB: JUGADORES */}
              {activeTab === 'jugadores' && (
                <motion.div key="jugadores" className={styles.playersGrid} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {mockPlayers.map((player, i) => (
                    <motion.div key={player.id} className={styles.playerCard} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
                      <div className={styles.playerHeader}>
                        <div className={styles.playerRank}>#{i + 1}</div>
                        <img src={player.logo} alt="" className={styles.playerTeamLogo} />
                      </div>
                      <div className={styles.playerInfo}>
                        <div className={styles.playerAvatar}>
                          <Users size={32} color="#475569" />
                        </div>
                        <h3 className={styles.playerName}>{player.name}</h3>
                        <span className={styles.playerTeam}>{player.team}</span>
                      </div>
                      <div className={styles.playerStats}>
                        <div className={styles.statBox}>
                          <span className={styles.statValue}>{player.goals}</span>
                          <span className={styles.statLabel}>Goles</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statBox}>
                          <span className={styles.statValue}>{player.assists}</span>
                          <span className={styles.statLabel}>Asist.</span>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statBox}>
                          <span className={styles.statValue}>{player.rating}</span>
                          <span className={styles.statLabel}>Rating</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

            </AnimatePresence>
          )}
        </div>
      </main>
      <Footer />
    </SmoothScroll>
  );
}

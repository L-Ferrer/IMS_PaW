import { Container, Box, Typography } from "@mui/material";
import { InView } from "react-intersection-observer";
import "../css/Content.css";

function Content() {
    return (
        <>
            <Typography id="main_title" variant="h1">Politische Parteien der USA</Typography>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");
                            } else {
                                entry.target.classList.remove("show");
                            }
                        }}
                    >
                        <Typography variant="h3" id="Republikaner" className="title">Republikaner</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Republikaner_text" className="text">
                            Die Republikanische Partei, auch als Grand Old Party bekannt, wurde am 28. Februar 1854 gegründet und gilt in den USA als die 2. Grösste Partei. Sie hat sich ursprünglich gegen Sklaverei eingesetzt. Heute verfolgen sie vor allem konservative Politik. Ihre politische Richtung lässt sich durch folgende Punkte charakterisieren:
                            <br />
                            <ul>
                                <li>
                                    Steuern: Republikaner unterstützen tiefe Steuern. Sie sind der Meinung, dass tiefe Steuern das BIP steigern und so dem Staat gleich oder mehr Einnahmen generieren.
                                </li>
                                <li>
                                    Sozialhilfe: Republikaner sind gegen Sozialhilfe für Arme. Sie denken, dass die Sozialhilfe nur faule Menschen ermutigen würden und dass sie vom Staat abhängig gemacht werden.
                                </li>
                                <li>
                                    Gesundheitswesen: Die Partei lehnt ein staatlich geführtes Gesundheitssystem ab. Sie bevorzugen eine persönliche oder arbeitgeberbasierte Versicherung.
                                </li>
                                <li>
                                    Waffen: Die Republikaner unterstützen grundsätzlich den Waffenbesitz. Sie denken, die Güterpreise sollten sich rein von Nachfrage und Angebot bestimmen.
                                </li>
                                <li>
                                    Abtreibung: Ein Grossteil der Partei findet, dass Abtreibung schlecht ist. Das hat moralische und religiöse Hintergründe.
                                </li>
                                <li>
                                    LGBTQ+: Die Partei ist gegen eine gleichgeschlechtliche Ehe.
                                </li>
                                <li>
                                    Freier Markt: Die Republikaner sind für einen freien Markt. Sie denken, die Güterpreise sollten sich rein von Nachfrage und Angebot bestimmen.
                                </li>
                            </ul>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h3" id="BLM" className="title">BLM</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="BLM_text" className="text">
                            <p>BLM steht für Black Lives Matter. Diese internationale Gruppierung wurde 2013 nach dem Freispruch vom Polizisten, Goerge Zimmerman, für die Tötung von Trayvon Martin von den drei dunkelhäutigen Frauen, Alicia Garza, Patrisse Cullors und Opal Tometi gegründet.</p>
                            <p>BLM setzt sich für die Rechte von dunkelhäutigen Personen ein. Die Aktivisten nutzten anfänglich nur Social Media, um Anerkennung zu gewinnen doch mittlerweile protestieren sie öffentlich, marschieren oder sperren Strassen und Wege.</p>
                            <p>Die ursprüngliche Philosophie beschreibt eine der Gründerinnen wie folgt: «When we say Black Lies matter, we are talking about the ways in which black people are derpived of our basic human rights and dignity.[…]”.</p>
                            <p>Obwohl von vielen behauptet wird, dass es in den USA kein Problem mit Rassismus gäbe, gibt es laut einer Gallop-Studie von 2020 zwar eine Mehrheit von Afroamerikanern, die sich korrekt von der Polizei behandelt fühlt. Diese Mehrheit sei jedoch deutlich kleiner als alle anderen Bevölkerungsgruppen.</p>
                            <p>Im Mai 2020 nach dem Tod von George Floyd, durch einen weissen Polizisten, wurde der Hass gegenüber rassistischen Strukturen erneut entflammt. Darauf folgte die Forderung «Defund the police». Es soll der Polizei die Finanzierung gekürzt werden um Gelder an soziale Organisationen wie Sozialdienste, Bildung oder Gesundheitsfürsorge zu investieren.</p>
                            <p>Auf der anderen Seite entstanden Gegenbewegungen wie: «White Lives Matter», «Blue Lives Matter» und «All Lives Matter».</p>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h2" id="Feminismus" className="title">Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Feminismus_text" className="text">
                            <div>
                                Der Begriff «Feminismus» entstand erst im späten 19. Jahrhundert. Er setzte sich in der internationalen Welle der neuen Bewegung ab 1968 weltweit als begriff durch.
                                Grundsätzlich gibt es drei Fragen, die man sich stellen muss, um die Art von Feminismus erkennen zu können.
                                Man soll sich fragen, von welchem Geschlecht aus gesprochen wird und in welchem Zusammenhang. Die Frage ist, ob die Gleichheit oder die Differenz von Frauen & Männern im Zentrum gestellt wird, oder ob das Geschlecht ein «soziales Konstrukt» ist.
                                Man soll sich auch Fragen, welche Problematik in der Gesellschaft besonders betont wird. Auch soll es wichtig sein, welche Klasse, Rasse oder Ethnizität relevant ist.
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Liberaler_Feminismus">Liberaler Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Liberaler_Feminismus_text" className="text">
                            <div className="pblock">
                                <p>Diese Art von Feminismus kritisiert die geschlechtliche Ungleichheit der Gesellschaft und der Demokratie und will die Gleichheit unabhängig vom Geschlecht in der bürgerlichen Gesellschaft erreichen.</p>
                                <p>Diese Richtung hat kein ausgearbeitetes Genderkonzept, d.h. dass die Geschlechter von den mentalen Krankheiten eher eine persönliche Angelegenheit sind und sollten die Chancen im Beruf und in der Politik nicht beeinträchtigen.</p>
                                <p>Die Hauptthemen sind die Antidiskriminierung, die berufliche Gleichstellung und die Vereinbarkeit von Familie und Beruf für Eltern. Manchmal kommen auch die Argumente der Verschwendungen von weiblichem Humankapital durch die Diskrimination durch die Sperren and qualifizierten Berufen. Aufgrund dessen wird er oft mit dem Neoliberalismus zusammengetan und kritisiert.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Differenzfeminismus">Differenzfeminismus </Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Differenzfeminismus_text" className="text">
                            <div className="pblock">
                                <p>Bei dieser Art von Feminismus ist vor allem die Betonung des Geschlechtsunterschieds im Zentrum. In Europa wurden sie von der romantischen Gegenbewegung zur Aufklärung inspiriert und beziehen sich auf die Gegenwerte zum «männlich zentriertem» Rationalismus.</p>
                                <p>Aufgrund dieses theoretischen Geschlechtsunterschieds beanspruchen diese Feministen eigene wichtige Aufgabenbereiche der Frauen im modernen «Männerstaat». Die Frauen müssen als potenzielle Mütter für die Liebe, die Fürsorge und den Frieden stehen und dabei diese Werte in den «Männerstaat» einbringen.</p>
                                <p>Eine andere Richtung des Feminismus bezieht sich auf die grundsätzlich gleichen Punkte und bekämpft die patriarchalisch-kapitalistische Ausbeutung.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Radikaler_Differenzfeminismus">Radikaler Differenzfeminismus  </Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Radikaler_Differenzfeminismus_text" className="text">
                            <div className="pblock">
                                <p>Diese Art von Feminismus legt das Patriarchat als System der Männerherrschaft über Frauen zugrunde. Diese Herrschaft wird von der «Sexualpolitik» bestimmt, wobei die Kontrolle der Sexualität und die Gewalt gegen Frauen aufrechterhalten wird.</p>
                                <p>Mitglieder betonen die Geschlechterdifferenz und setzen auf weibliche Solidarität und Widerstand.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Konservativer_Feminismus">Konservativer Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Konservativer_Feminismus_text" className="text">
                            <div className="pblock">
                                <p>Auch diese Art von Feminismus geht eher von der Geschlechterdifferenz aus. Allerdings sieht er im Vergleich zu früher Frauen nicht als Mütter & Hausfrauen, sondern mehr für die Chancengleichheit im Beruf.</p>
                                <p>Besonders Positionen im Management, in Medien und in der Politik werden dort gefördert. Dabei wird teilweise differenztheoretisch mit den weiblichen Fähigkeiten in Kommunikation und Beziehungen argumentiert, die vor allem in der Wirtschaft und der Politik von Vorteil sind.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Sozialistischer_Feminismus">Sozialistischer Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Sozialistischer_Feminismus_text" className="text">
                            <div className="pblock">
                                <p>Diese Art von Feminismus legt in sein Geschlechterbild die Gleichheit ins Zentrum. Im Gesellschaftsbild werden die strukturellen Ungleichheiten nach Klasse, Geschlecht und Rasse kritisiert, besonders im Zusammenhang mit der kapitalistischen Gesellschaft.</p>
                                <p>Diese Gesellschaft brachte den Ansatz der menschlichen Reproduktion, also der Geburt und Versorgung von Menschen in, dabei wird heute besonders nur noch die Versorgung der Menschen, und somit auch der gesellschaftlichen Arbeitskräfte, verstanden.</p>
                                <p>Diese oft unentlohnte Arbeit ausserhalb des Arbeitsmarktes wird nach diesem Feminismus dem neopatriarchalischen Kapitalismus den Frauen zugewiesen. Gleichzeitig können die Männer ihre Arbeit auf dem Arbeitsmarkt verkaufen, was den Frauen, durch die aufgeforderte Arbeit der Versorgung, nicht ermöglicht wird. Teile dieser gering entlohnten Arbeit von Einwanderern im Haushalt geleistet, dabei spielte das Geschlecht, die Klasse und die Migration eine grosse Rolle.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Transformativer_Feminismus">Transformativer Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" className="text" id="Transformativer_Feminismus_text">
                            <div className="pblock">
                                <p>Beim transformativen Feminismus wird die Ungleichheit der Geschlechter in gesellschaftlichen Strukturen begründet, ähnlich wie beim sozialistischen Feminismus.</p>
                                <p>Dabei wird der globale & neoliberale Kapitalismus aufgrund der sehr tiefen Ungleichheiten und die undemokratische Hinzufügung von Personen von sehr gebildeten und qualifizierten Frauen kritisiert.</p>
                                <p>Er wird mit der Zeit relevanter aufgrund der Krisen der Versorgung des demografischen Übergangs.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Öko-Feminismus">Öko-Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" id="Öko-Feminismus_text" className="text">
                            <div className="pblock">
                                <p>Der ökologische Feminismus kritisiert unter anderem die Ausbeutung der Frauen, aber besonders speziell auch die Ausbeutung der Natur im patriarchalischen System des Kapitalismus.</p>
                                <p>Während die älteren Strömungen besonders differenztheoretisch argumentieren, d.h. dass deren Argumente besonders im Unterschied zum Status quo basieren, während die neueren Strömungen eher auch die neuen Naturverhältnisse im Bezug zu den Geschlechtern hinterfragen.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h4" className="subtitle" id="Postkolonialer_Feminismus">Postkolonialer Feminismus</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" className="text" id="Postkolonialer_Feminismus_text">
                            <div className="pblock">
                                <p>Bei dieser Richtung werden die Geschlechterverhältnisse besonders im Kontext der Machtverhältnisse der Welt kritisiert und möchten die Ungleichheiten der heutigen, postkolonialen Welt herausarbeiten.</p>
                                <p>Die zwei Kritikpunkte, welche besonders oft genannt werden, ist der Unterschied von «weissen» Männern und Frauen zu den weiterhin untergeordneten «Subalternen» im Süden.</p>
                                <p>Ein anderer Kritikpunkt ist auch die Ungleichheiten zwischen den Geschlechterverhältnissen in den Metropolen und den Gesellschaften in der heutigen Zeit. Es bilden sich mit der Zeit immer mehr Geschlechtertheorien mit globalem Ausmass, die die Ungleichheiten der Welt zusammenführen.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h3" id="Cancel_Culture" className="title">Cancel Culture</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" className="text" id="Cancel_Culture_text">
                            <div>
                                <p>Unter Cancel Culture versteht man seit Ende 2010s eine Art von Ausschluss eines Sozialen/Professionellem Umkreis einer Person. Dabei ist es irrelevant, ob dies Online, auf Sozialen Medien oder in Person geschieht.</p>
                                <p>Ein weiterer Begriff, der mit Cancel Culture oft in Verbindung gebracht wird, ist Deplatforming.</p>
                                <p>Das Wort stammt aus den englischen Medien und wird teilweise auch als Synonym zur Zensurkultur verwendet, da sie sehr oft mit der sogenannten “Political Correctness” zu tun hat.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
                <Box className="box">
                    <InView
                        as="section"
                        className="text-1-1"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h3" id="Me_Too" className="title">Me Too</Typography>
                    </InView>
                    <InView
                        as="section"
                        className="text-1-2"
                        onChange={(inView, entry) => {
                            if (inView) {
                                entry.target.classList.add("show");

                            } else {
                                entry.target.classList.remove("show");

                            }
                        }}
                    >
                        <Typography variant="h5" className="text" id="Me_Too_text">
                            <div>
                                <p>#MeToo ist ein Hashtag in den sozialen Medien seit ungefähr Mitte Oktober 2017.</p>
                                <p>Dieser Begriff lässt sich auf eine Aktivistin zurückführen und ermutigt Frauen mit Tweets auf das Ausmass von sexuellen Belästigungen und Übergriffen aufmerksam zu machen.</p>
                            </div>
                        </Typography>
                    </InView>
                </Box>
            </Container>
            <Container className="container">

            </Container>
        </>
    )
}

export default Content
import Link from "next/link";
import { CardContentListArticles } from "@/components/layout/situation/Content/CardContentListArticles";
import CardSituation from "@/components/layout/situation/cardSituation";

export default function WatchPage () {
    return (
        <div className={"w-full bg-gradient-to-b md:h-[3500px] h-[4500px] from-gray-900 to-blue-950"}>
            <section className={"max-w-6xl mx-auto w-full text-white pt-[150px]"}>
                <h2 className={"text-6xl text-white font-bold text-center py-16 bg-[url('/Veille/fadeVeille.jpg')] rounded-xl max-w-4xl mx-auto bg-cover bg-no-repeat mb-12"}>
                    Technological watch
                </h2>
                <h3 className={"my-5 font-bold text-center text-2xl"}>
                    What is a technological watch?
                </h3>
                <h2 className={"my-10 text-lg max-w-4xl mx-auto text-center p-4 bg-gray-500 rounded-lg italic"}>
                    Technological watch, a component of strategic monitoring, involves monitoring technical developments,
                    innovations within a given sector. Technological watch includes monitoring, collecting, sharing,
                    and disseminating information to anticipate or stay informed about changes in research, development,
                    patents, product launches, materials, processes, concepts, manufacturing innovation, etc. Its purpose
                    is to assess the impact on the environment and the organization.
                    <p className={"pt-5 text-sm text-gray-800"}>@Source: Wikipedia</p>
                </h2>
            </section>
            <section>
                <h1 className={"text-2xl text-white text-center font-bold"}>Subject of my technological watch</h1>
                <p className={"text-center text-white font-bold rounded-lg bg-gray-400 max-w-xs p-4 w-full mx-auto my-5 text-xl"}>
                    Web vulnerabilities</p>
            </section>
            <section className={"max-w-6xl mx-auto w-full text-white pt-10"}>
                <h3 className={"my-5 font-bold text-center text-4xl"}>
                    How do I organize my watch?
                </h3>
                <section className={"w-full max-w-2xl mx-auto"}>
                    <div className={"flex h-[125px] md:h-[250px] py-4 mx-auto md:max-w-[1050px] max-w-[350px]"}>
                        <div
                            className={"rounded-l-xl bg-[url('/Veille/itconnect.png')] w-full max-w-[100px] md:max-w-[200px] bg-cover bg-center"}></div>
                        <div className={"w-full bg-gray-500 md:max-w-[500px] max-w-[300px] rounded-r-xl"}>
                            <div className={"p-4 pl-6"}>
                                <p className={"text-xl font-bold pb-5"}>Newsletter subscription</p>
                                <p className={"text-md hidden md:flex"}>
                                    By subscribing to different newsletters on different platforms
                                    platforms, I was able to keep a constant watch in a simple way.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex h-[125px] md:h-[250px] py-4 mx-auto md:max-w-[1050px] max-w-[350px]"}>
                        <div
                            className={"rounded-l-xl bg-[url('/Veille/linkedin.png')] w-full max-w-[100px] md:max-w-[200px] bg-cover bg-center"}></div>
                        <div className={"w-full bg-gray-500 md:max-w-[500px] max-w-[300px] rounded-r-xl"}>
                            <div className={"p-4 pl-6"}>
                                <p className={"text-xl font-bold pb-5"}>Use of Twitter, LinkedIn</p>
                                <p className={"text-md hidden md:flex"}>
                                    These various networks enable me to keep abreast of the latest news.
                                    Used wisely, they can be a great resource for learning.
                                    of useful learning information.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"flex h-[125px] md:h-[250px] py-4 mx-auto md:max-w-[1050px] max-w-[350px]"}>
                        <div
                            className={"rounded-l-xl bg-[url('/Veille/discord.jpg')] w-full max-w-[100px] md:max-w-[200px] bg-cover bg-center"}></div>
                        <div className={"w-full bg-gray-500 md:max-w-[500px] max-w-[300px] rounded-r-xl"}>
                            <div className={"p-4 pl-6"}>
                                <p className={"text-xl font-bold pb-5"}>Discord feed</p>
                                <p className={"text-md hidden md:flex"}>
                                    I have created a feed that automatically informs me when new articles are
                                    new articles on various topics that interest me. At the same time, I have the opportunity to take part in online conferences,
                                    about current events in cyber, dev etc...
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className={"my-10 w-full max-w-5xl mx-auto rounded-lg text-white"}>
                <h1 className={"text-4xl text-white text-center font-bold pt-10"}>My articles</h1>
                <div
                    className={"w-full mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 justify-items-center mb-10"}>
                    {CardContentListArticles.map((item, index) => (
                        <div key={index}>
                            <CardSituation array={item}/>
                        </div>
                    ))}
                </div>
            </section>
            <section className={"my-10 bg-gray-500 w-full md:max-w-5xl max-w-sm mx-auto rounded-lg h-[300px]"}>
                <h1 className={"text-4xl text-white text-center font-bold py-10"}>Resources used</h1>
                <div className={"grid grid-cols-4 grid-rows-2 gap-3 justify-items-stretch px-4 pb-5"}>
                    <Link href={"https://www.cert.ssi.gouv.fr/alerte/"}
                          className={"bg-[url('/Veille/anssi.jpg')] bg-cover bg-center p-4 px-8 rounded-lg h-[80px]"}>
                    </Link>
                    <Link href={"https://portswigger.net/web-security"}
                          className={"bg-[url('/Veille/burp.png')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://www.synacktiv.com/publications"}
                          className={"bg-[url('/Veille/synac.png')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://owasp.org/www-community/vulnerabilities/"}
                          className={"bg-[url('/Veille/owasp.jpg')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://tryhackme.com/"}
                          className={"bg-[url('/Veille/thm.jpg')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://app.hackthebox.com/home"}
                          className={"bg-[url('/Veille/htb.png')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://www.root-me.org/"}
                          className={"bg-[url('/Veille/tm.jpg')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                    <Link href={"https://security.snyk.io"}
                          className={"bg-[url('/Veille/snyk.png')] bg-cover bg-center p-4 px-8 rounded-lg"}>
                    </Link>
                </div>
            </section>
        </div>
    )
}
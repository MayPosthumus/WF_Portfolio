import styles from './home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <h3>Profiel</h3>
                <p>Ik ben een student Programmeren,
                    voornamelijk ervaren in front-end en
                    webdevelopment, Graag zou ik dus
                    meer leren over het designproces,
                    maar ook vind ik het super fascinerend
                    om fysieke dingen te programmeren.
                    Er zijn twee grote dingen waar ik intens
                    gelukkig van word: muziek en het
                    gevoel als ik net iets gemaakt heb. Zeker
                    de passieprojecten, zo ik hou me graag
                    bezig met het modden van GameBoys,
                    prullen in Blender en koken. Daarnaast
                    word ik ook heel vrolijk van het bereiken
                    van mijn korte-termijn doelen: een boek
                    uitlezen, spel uitspelen of die éne
                    klimmuur volledig beklimmen waar ik al
                    drie weken niet verder dan de helft kom.
                </p>
            </div>
            <div className={styles.skills}>
                <h3>Skills</h3>
                <table>
                    <tr>
                        <td><label id="HTML">HTML:</label></td>
                        <td><progress id="HTML" value="98" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="CSS">CSS:</label></td>
                        <td><progress id="CSS" value="90" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="jsts">JavaScript / Typescript</label></td>
                        <td><progress id="jsts" value="85" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="angular">Angular:</label></td>
                        <td><progress id="angular" value="75" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="react">React.js / React Native:</label></td>
                        <td><progress id="react" value="75" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="dotnet">.NET:</label></td>
                        <td><progress id="dotnet" value="50" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="sql">SQL:</label></td>
                        <td><progress id="sql" value="50" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="cpp">C++:</label></td>
                        <td><progress id="cpp" value="45" max="100"/></td>
                    </tr>
                    <tr>
                        <td><label id="python">Python:</label></td>
                        <td><progress id="python" value="50" max="100"/></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Home;
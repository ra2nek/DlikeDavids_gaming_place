function language(){
    let option = document.getElementById('lang').value;
    let Fm = document.getElementsByClassName('1m');
    let Sm = document.getElementsByClassName('2m');
    let Tm = document.getElementsByClassName('3m');
    let Frm = document.getElementsByClassName('4m');
    log("switch " + option)
    switch(option){
        case "English":
            options[0].innerHTML = "Play";
            options[1].innerHTML = "Options";
            options[2].innerHTML = "Credits";
            options[3].innerHTML = "Extras";
            document.querySelector("#changelog h1").innerHTML = "Changelog";
            for(let i = 0; i < 4; i++){
                document.getElementsByClassName('bb')[i].innerHTML = "Back"
            }
            Fm[0].innerHTML = "Pwong"
            Fm[1].innerHTML = "Tic tac toe"
            Fm[2].innerHTML = "Rock paper scissors"
            Fm[3].innerHTML = "Memory"
            Fm[4].innerHTML = "Snake"
            Sm[0]. innerHTML = 'Language'
            Tm[0].innerHTML = 'Created by: DlikeDavid'
            log("Lang set english")
            document.getElementsByClassName("alot2")[0].innerHTML =
            `
            <h2 class="part2">v 0.6.2</h2>
            <h3>Main site:</h3>
            <p>Added loading screen</p>
            <p>Fixed delay on pressing buttons</p>
            <h3>Games:</h3>
            <p>Minor bug fixes</p>
            <p>Fixed memory</p>
            <p>Fixed lines in tic tac toe</p>
            <!-- B R E A K-->
            <h2 class="part2">v 0.5.5</h2>
            <h3>Main site:</h3>
            <p>Updated minigame showcases imagines</p>
            <h3>Games:</h3>
            <p>Added return to menu button in all minigames</p>
            <p>Added settings button to each minigame (not all yet have settings)</p>
            <p>Added settings to pwong</p>
            <p>Added winscreen to memory</p>
            <p>Added imagines to memory</p>
            <h2 class="part2">v 0.47</h2>
            <h3>Main site:</h3>
            <p>Changed changelog font to <a href="https://fonts.google.com/specimen/Poppins?query=poppins" target="_blank">poppins</a></p>
            <p>Changed main site font to <a href="https://fonts.google.com/specimen/Rubik?query=Rubik" target="_blank">Rubiks</a></p>
            <p>Animated changelog</p>
            <p>Deleted potato mode (not like it was working)</p>
            <p>Fixed menu (selecting two or more options while animation was going made
                two or more menus pop up)
            </p>
            <p>Fixed changelog not working after changing language</p>
            <p>Changed selected game animation</p>
            <h3>Games:</h3>
            <p>Added reset button to tic tac toe</p>
            <p>Fixed positions of lines in tic tac Toe</p>
            <p>Added old pwong in the extras section</p>
            <h2 class="part2">v 0.34</h2>
            <h3>Main site:</h3>
            <p>Styled scrollbars</p>
            <p>changed name to DlikeDavid's gamig place (previously DlikeDavid's retro place)</p>
            <p>Added changelog section</p>
            <p>Added games preview (image on the left when hovering on game name)</p>
            <h3>Games:</h3>
            <p>Tic tac toe beta released</p>
            <p>Pwong deleted (needs fixing)</p>
            <p>Added memory (breaks on fast inputs - will fix :] )</p>
            <p>Added rock paper scissors (maybe will be updated)</p>
            <h2 class="part2">v 0.26</h2>
            <h3>Main site:</h3>
            <p>Added polish language in the settings</p>
            <p>Added animations</p>
            <p>Added animated title on the right</p> 
            <p>Added placeholders for other games</p>
            <h3>Games:</h3>
            <p>Added pwong (a bit broken but mainly working)</p>`
            break;
        case "Polish (Polski)":
            options[0].innerHTML = "Zagraj";
            options[1].innerHTML = "Opcje";
            options[2].innerHTML = "Twórcy";
            options[3].innerHTML = "Dodatki";
            document.querySelector("#changelog h1").innerHTML = "Dziennik zmian";
            for(let i = 0; i < 4; i++){
                document.getElementsByClassName('bb')[i].innerHTML = "Cofnij"
            }
            Fm[0].innerHTML = "Pwong"
            Fm[1].innerHTML = "Kółko i krzyżyk"
            Fm[2].innerHTML = "Kamień papier nożyce"
            Fm[3].innerHTML = "Pamieć"
            Fm[4].innerHTML = "Wąż"
            Sm[0]. innerHTML = 'Jezyk'
            Tm[0].innerHTML = 'Stworzone przez: DlikeDavid'
            log("Lang set Polish")
            document.getElementsByClassName("alot2")[0].innerHTML =
            `
            <h2 class="part2">v 0.6.2</h2>
            <h3>Strona główna:</h3>
            <p>Dodano ekran ładowania</p>
            <p>Naprawiono opóźnienie przy wciskaniu przycisków</p>
            <h3>Gry:</h3>
            <p>Poprawki mniejszych błędów</p>
            <p>Naprawiono grę "pamięć"</p>
            <p>Naprawiono linie w "Kółko i krzyżyk"</p>
            <!-- B R E A K-->
            <h2 class="part2">v 0.5.5</h2>
            <h3>Strona główna:</h3>
            <p>Zaktualizowano obrazki pozdglądów gier</p>
            <h3>Gry:</h3>
            <p>Dodano przycisk powrót do menu dla każdej gry</p>
            <p>Dodano przycisk ustawień do każdej gry (nie każda ma jeszcze ustawienia)</p>
            <p>Dodano ustawienia do pwonga</p>
            <p>Dodano ekran wygranej dla "pamięć"</p>
            <p>Dodano obrazki dla "pamięć"</p>
            <h2 class="part2">v 0.47</h2>
            <h3>Strona główna:</h3>
            <p>Zmieniono czcionkę dziennika zmian na <a href="https://fonts.google.com/specimen/Poppins?query=poppins" target="_blank">poppins</a></p>
            <p>Zmieniono czcionkę strony głównej na <a href="https://fonts.google.com/specimen/Rubik?query=Rubik" target="_blank">Rubiks</a></p>
            <p>Zaanimowano dziennik zmian</p>
            <p>Usunięto tryb ziemniaka (nie tak ze działał)</p>
            <p>Naprawiono menu (Pojawianie się wielu menu po wybraniu wielu opcji w czasie animacji przejścia)
            </p>
            <p>Naprawiono dziennik zmian po zmianie języka</p>
            <p>Zmieniono animacje wyboru gry</p>
            <h3>Gry:</h3>
            <p>Dodano przycisk reset do kółko i krzyżyk</p>
            <p>Naprawiono pozycje lini w kółku i krzyżyk</p>
            <p>Dodano starego pwonga w sekcji "dodatki"</p>
            <h2 class="part2">v 0.34</h2>
            <h3>Strona główna:</h3>
            <p>Ostylowano scrollbar</p>
            <p>Zmieniono nazwę na DlikeDavid's gaming place (wcześniej DlikeDavid's retro place)<p>
            <p>Dodano sekcje "dziennik zmian"</p>
            <p>Dodano podgląd gier (obrazki po prawej jak się najedzie na nazwę gry)</p>
            <h3>Gry:</h3>
            <p>Beta "kółko i krzyżyk" wypuszczona</p>
            <p>Usunięto "pwonga" (idzie do naprawy)</p>
            <p>Dodano "pamieć" (psuje sie przy szybkich wciśnięciach - naprawię :])</p>
            <p>Dodano "papier kamień nożyce" (może zaktualizuje)</p>
            <h2 class="part2">v 0.26</h2>
            <h3>Strona główna:</h3>
            <p>Dodano język polski w opcjach</p>
            <p>Dodano animacje</p>
            <p>Dodano zaanimowany tytuł po prawej</p> 
            <p>Dodano placeholdery na przyszłe gry</p>
            <h3>Games:</h3>
            <p>Dodano "pwong" (trochę zepsuty ale głównie działa)</p>`
            break;
        default:
            log("ERROR: Wrong Language selected")
    }
    part1 = changelog.querySelectorAll("h1")
    part2 = changelog.querySelectorAll("h2")
    part3 = changelog.querySelectorAll("h3")
    part4 = changelog.querySelectorAll("p")
}
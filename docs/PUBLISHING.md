# Pierwsza publikacja na GitHubie

Ta instrukcja zakłada, że nigdy wcześniej nie publikowałeś repozytorium. Najprostsza ścieżka działa w przeglądarce i nie wymaga wpisywania poleceń Git.

## Etap 0 — najpierw repozytorium prywatne

Pakiet jest technicznie przygotowany, ale publiczne wydanie pozostaje zablokowane, dopóki każda pozycja w `ASSET-AUDIT.md` nie ma statusu `APPROVED` albo nie zostanie zastąpiona.

W szczególności projekt zawiera grafiki pochodzące z ikon Apple/macOS albo blisko je odtwarzające. Licencja MIT projektu i nota MIT NineIcons Redux nie zastępują zgody właściciela praw do bazowej grafiki.

Możesz też zastąpić tekst `macOS 9 Inspired Theme contributors` w pliku `LICENSE` swoim imieniem, pseudonimem lub nazwą konta GitHub.

## Etap 1 — utworzenie pustego repozytorium

1. Załóż konto na <https://github.com>, jeśli jeszcze go nie masz.
2. Kliknij znak **+** w prawym górnym rogu i wybierz **New repository**.
3. Ustaw nazwę `macos9-inspired-heroic-theme`.
4. Ustaw opis: `macOS 9 / Platinum-inspired light and dark themes for Heroic Games Launcher`.
5. Wybierz widoczność **Private**.
6. Nie dodawaj README, `.gitignore` ani licencji — te pliki już są w paczce.
7. Kliknij **Create repository**.

Oficjalna instrukcja GitHuba: <https://docs.github.com/en/get-started/start-your-journey/creating-a-repository-for-your-project-on-github>

## Etap 2 — przesłanie gotowych plików

1. Rozpakuj `macos9-inspired-heroic-theme-v1.0-github-ready.zip`.
2. Na stronie pustego repozytorium kliknij odnośnik **uploading an existing file**. Jeśli repozytorium nie jest puste, wybierz **Add file → Upload files**.
3. Otwórz rozpakowany katalog `macos9-inspired-heroic-theme-upload-ready`. Zaznacz wszystkie znajdujące się **wewnątrz niego** pliki i katalogi, a następnie przeciągnij je do przeglądarki. Nie przeciągaj samego katalogu `macos9-inspired-heroic-theme-upload-ready` ani pliku ZIP. Uwzględnij także katalog `.github`.
4. Przed zatwierdzeniem sprawdź listę przesyłanych elementów. Ścieżki powinny zaczynać się bezpośrednio od `README.md`, `LICENSE`, `themes/`, `docs/` i `.github/`. Nie powinny zaczynać się od `macos9-inspired-heroic-theme-upload-ready/` ani `macos9-inspired-heroic-theme/`.
5. W polu wiadomości wpisz `Initial release 1.0`.
6. Zatwierdź przesyłanie przyciskiem tworzącym commit.

Pakiet mieści się w limitach interfejsu WWW: GitHub pozwala przesłać jednocześnie do 100 plików, każdy o rozmiarze do 25 MiB. Oficjalna instrukcja: <https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository>

## Etap 3 — kontrola prywatnego repozytorium

1. Sprawdź, czy README pokazuje oba zrzuty ekranu i czy odnośniki działają.
2. Otwórz kartę **Actions** i poczekaj, aż zadanie **Validate themes** zakończy się na zielono.
3. Otwórz `themes/` i upewnij się, że są tam wyłącznie:
   - `macos9-inspired-light.css`;
   - `macos9-inspired-dark.css`.
4. Nie wklejaj haseł ani tokenów dostępu do plików, issue, commitów lub wiadomości.

## Etap 4 — kontrola przed upublicznieniem

- [ ] `npm test` przechodzi lokalnie i w GitHub Actions.
- [ ] Lista `docs/VISUAL-REGRESSION.md` została wykonana w obu wariantach.
- [ ] Każdy wiersz w `ASSET-AUDIT.md` ma status `APPROVED`.
- [ ] Potwierdzono prawo do publikacji zrzutów ekranu.
- [ ] Ustalono, czy nazwa odwołująca się do macOS jest akceptowalna jako opis inspiracji.
- [ ] W repozytorium nie ma plików `DISTRIBUTION`, wersji roboczych ani sekretów.

Dopiero po spełnieniu całej listy zmień widoczność repozytorium z prywatnej na publiczną w **Settings → General → Danger Zone → Change repository visibility**.

## Etap 5 — wydanie 1.0

1. Na stronie repozytorium kliknij **Releases → Draft a new release**.
2. Utwórz tag `v1.0`.
3. Ustaw tytuł `macOS 9 Inspired Theme for Heroic 1.0`.
4. W notatkach podaj docelową wersję Heroic 2.22.x, skrót instalacji i informację o wariantach jasnym oraz ciemnym.
5. Dołącz:
   - `themes/macos9-inspired-light.css`;
   - `themes/macos9-inspired-dark.css`;
   - opcjonalnie zweryfikowaną paczkę ZIP.
6. Nie dołączaj minifikowanego ani `DISTRIBUTION` wariantu.

Oficjalna instrukcja tworzenia wydań: <https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository>

## Sugerowane metadane

- Nazwa repozytorium: `macos9-inspired-heroic-theme`
- Opis: `macOS 9 / Platinum-inspired light and dark themes for Heroic Games Launcher`
- Tagi: `heroic-games-launcher`, `heroic-theme`, `macos9`, `platinum`, `custom-css`, `linux-gaming`
- Pierwszy commit: `Initial release 1.0`
- Pierwszy tag: `v1.0`

Po pierwszej publikacji warto zainstalować Git lokalnie, ale nie jest to wymagane do wykonania powyższych kroków.

# macOS 9 Inspired Theme dla Heroic

[English README](README.md)

Samodzielny, nieskompresowany motyw inspirowany interfejsem Mac OS 9 / Platinum dla Heroic Games Launcher. Zawiera spójne warianty jasny i ciemny, klasyczne kontrolki, własne ikony oraz celowo kanciastą geometrię.

> Wersja motywu: **1.0**  
> Sprawdzona wersja docelowa: **Heroic Games Launcher 2.22.x**

| Jasny                                                           | Ciemny                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------- |
| ![Biblioteka — motyw jasny](docs/screenshots/library-light.png) | ![Biblioteka — motyw ciemny](docs/screenshots/library-dark.png) |

Powyższe obrazy są niezmodyfikowanymi zrzutami rzeczywistego ekranu Biblioteki Heroica z włączonym jasnym i ciemnym wariantem motywu.

## Najważniejsze elementy

- wypukłe i wklęsłe kontrolki w stylu Platinum;
- skoordynowane palety jasna i ciemna;
- klasyczne ikony w Bibliotece, karcie gry, ustawieniach i Menedżerze Wine;
- historyzujące, ale czytelne logotypy GOG, Epic Games i Amazon;
- spójne kwadratowe checkboxy i checkmarki;
- nieruchomy, wzorzysty tor scrollbara o szerokości 17 px z kwadratowymi strzałkami;
- grafiki osadzone w CSS — bez pobierania obrazów podczas działania;
- czytelny kod i zasady utrzymania dla ludzi, LLM-ów oraz agentów programistycznych.

## Instalacja

1. Pobierz [`macos9-inspired-light.css`](themes/macos9-inspired-light.css) albo [`macos9-inspired-dark.css`](themes/macos9-inspired-dark.css).
2. Umieść plik CSS w katalogu przeznaczonym na własne motywy Heroic.
3. Otwórz **Heroic → Ustawienia → Ogólne**. W części układów 2.22.x te same opcje mogą być również dostępne w **Ułatwieniach dostępu**.
4. Wskaż ten katalog w polu **Ścieżka własnych motywów**.
5. Wybierz nazwę pliku CSS na liście **Motyw**. Jeśli plik nie pojawi się od razu, uruchom Heroic ponownie.

Heroic używa nazwy pliku CSS jako nazwy motywu i tworzy z niej klasę elementu `body`. Zalecane jest pozostawienie dostarczonej nazwy.

## Czcionki

Czcionki nie są dołączone. Motyw preferuje lokalnie zainstalowane `ChicagoFLF`, `Chicago`, `Charcoal` i `Geneva`, a następnie używa zwykłych bezszeryfowych czcionek systemowych.

## Zgodność

Selektory powstały dla Heroic 2.22.x. Heroic jest aplikacją React/Electron, dlatego jego wewnętrzna struktura HTML może zmieniać się pomiędzy wydaniami. Aktualizacja Heroic może wymagać dostosowania selektorów, nawet jeśli sam CSS pozostanie poprawny.

Do zgłoszenia błędu wizualnego dołącz wersję Heroic, wariant motywu i zrzut ekranu.

## Struktura projektu

- `themes/` — instalowalne warianty jasny i ciemny;
- `docs/ARCHITECTURE.md` — niezmienniki kaskady, ikon i kontrolek;
- `docs/VISUAL-REGRESSION.md` — lista ekranów do sprawdzenia po zmianach;
- `docs/PUBLISHING.md` — instrukcja pierwszej publikacji dla początkujących;
- `AGENTS.md` — zasady bezpiecznej edycji dla LLM-ów i agentów;
- `THIRD_PARTY_NOTICES.md` — autorzy cudzych elementów i blokady publikacji;
- `ASSET-AUDIT.md` — lista pochodzenia osadzonych grafik;
- `scripts/validate.js` — automatyczne testy strukturalne.

## Rozwój

```bash
npm ci
npm test
```

Kod celowo nie jest minifikowany. Nie należy publikować automatycznie skompresowanego wariantu `DISTRIBUTION`: przepisanie osadzonych grafik albo kolejności kaskady może zmienić wygląd. Przed usuwaniem powtórzonych selektorów lub zmiennych przeczytaj [opis architektury](docs/ARCHITECTURE.md).

## Bezpieczeństwo

Własny CSS działa wewnątrz interfejsu Heroic i należy traktować go jak kod. Dostarczone arkusze nie zawierają `@import` ani zewnętrznych adresów HTTP(S); grafiki są osadzone jako data URI. Przed użyciem cudzych forków należy przejrzeć zmiany.

## Licencja i status grafik

Oryginalny kod i dokumentacja projektu są udostępnione na [licencji MIT](LICENSE). Ta licencja **nie obejmuje cudzych grafik, logotypów, znaków towarowych, fontów ani zrzutów ekranu** osadzonych w projekcie lub pokazanych w dokumentacji.

Pakiet zawiera elementy NineIcons Redux z zachowaną notą MIT oraz grafiki wywodzące się z ikon Apple/macOS albo bezpośrednio do nich nawiązujące, dla których prawo do publicznej redystrybucji nie zostało jeszcze potwierdzone. Nie uznawaj pakietu za prawnie gotowy do publicznego wydania, dopóki każda pozycja w [ASSET-AUDIT.md](ASSET-AUDIT.md) nie otrzyma statusu `APPROVED` albo nie zostanie zastąpiona niezależnie stworzoną grafiką. Szczegóły znajdują się w [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Jest to niezależny motyw społecznościowy. Projekt nie jest powiązany ani oficjalnie wspierany przez Heroic Games Launcher, Apple, GOG, Epic Games czy Amazon. Nazwy produktów i znaki towarowe należą do odpowiednich właścicieli.

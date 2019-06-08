# :world_map: Diplomacy Leaderboard

_A static page leaderboard for our diplomacy games at work. Built using
[tailwindcss](https://tailwindcss.com/), hosted via
[github pages](https://pages.github.com/)._

View it [here](https://alxwrd.github.io/diplomacy-leaderboard).

## Scoring <sup><sup>[:link:](http://www.diplomacy-archive.com/resources/ftf/fred_townsend.htm)</sup></sup>

- Every player receives thier center count (but not more than 18).

- Then, bonus points for a win or draw as follows:

| *Condition* |  *Points*                                         |
|-------------|---------------------------------------------------|
| Win         | 100 points                                        |
| 2 Way draw  | 48 points each (96 points total)                  |
| 3 Way draw  | 31 points each (93 points total)                  |
| 4 Way draw  | 22 points each (88 points total)                  |
| 5 Way draw  | 17 points each (85 points total)                  |
| 6 Way draw  | 13 points each (78 points total)                  |
| 7 Way draw  | 7 points for players who can't eliminate anybody. |

- Finally, these scores are adjusted for country played as follows: 

| *Country* |  *Modifier* |
|-----------|-------------|
| Italy     | + 2 points  |
| Austria   | + 1 point   |
| Russia    | No change   |
| Germany   | No change   |
| Turkey    | - 1 point   |
| England   | - 2 points  |
| France    |  - 2 points |

## Build

```
npm install --only=dev
npm run build
```

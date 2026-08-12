# Embedded asset audit

Public release is blocked until every row is `APPROVED` or the corresponding material is replaced. This checklist is deliberately conservative and should be completed by the repository owner.

The two CSS variants each contain 58 unique embedded image payloads, 69 image occurrences and 46 `--macos9-*` asset variables.

| Asset group                      | Current understanding                                                    | Required evidence/action                                                                               | Status |
| -------------------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------ |
| NineIcons Redux-derived icons    | MIT notice preserved in both CSS files; credited to aitees and Grassmunk | Match each reused payload to an upstream file and retain the exact license/copyright notice            | REVIEW |
| Apple/macOS-derived icons        | Some artwork was described as coming from or reproducing macOS icons     | Obtain express permission or replace with independently created, non-copying artwork                   | REVIEW |
| Project-generated classic icons  | Created during theme development, sometimes from visual references       | Record which assets are original and retain source prompts/files where available                       | REVIEW |
| GOG, Epic Games and Amazon marks | Used for source-store identification                                     | Confirm acceptable trademark use; do not claim ownership or include them under the project MIT license | REVIEW |
| Heroic/upstream interface icons  | May include retained or adapted upstream shapes                          | Identify upstream files and their license, or replace with original artwork                            | REVIEW |
| Referenced base CSS/palette      | Dark CSS names `userChrome_MacOS9_GreyDarkerPurple.css` as a source      | Identify its author/license and separate copied declarations from independently authored work          | REVIEW |
| Documentation screenshots        | Show Heroic and third-party game artwork                                 | Confirm permission/fair-use basis or replace with cleared demonstration imagery                        | REVIEW |

## Per-asset record

Create one row for every distinct embedded payload before changing a group to `APPROVED`.

| CSS variable or selector | Description | Source URL/file | Author | License/permission | Modifications | Decision |
| ------------------------ | ----------- | --------------- | ------ | ------------------ | ------------- | -------- |
| _To be completed_        |             |                 |        |                    |               | REVIEW   |

Allowed decisions: `APPROVED`, `REPLACE`, `REMOVE`, `REVIEW`.

This is a documentation aid, not legal advice. When ownership or derivative-work status is uncertain, obtain qualified legal advice or replace the asset.

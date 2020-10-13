// ==UserScript==
// @name        FSEconomy New Experience
// @version     2.1
// @author      UDKEN7
// @description FSEconomy 사용자 경험을 개선합니다. 작업 목록 페이지에 가격 대신 거리 대 가격이 표시됩니다. (추후 병기 구현 예정임) All-In 작업의 경우 작업 오른쪽에 비행기 ID가 표시되는데, 기종도 같이 표시되게 변경합니다. 공항 검색 페이지에서는 방문한 URL이 자주색으로 표시되는데, 이 자주색 링크가 공항을 검색할때마다 초기화되어 마구잡이로 열 때 좋습니다. 또 검색 중 목록을 섞을 수 있습니다. 부트스트랩 4.0을 적용시켜 페이지를 아름답게 만들었습니다. (원래부터 워낙 상태가 말이 아니라 최선을 다하겠습니다.)
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @run-at      document-start
// @namespace   https://github.com/MyNewGroup
// @include     /^http(s)?://server.fseconomy.net/.*$/
// @require     https://code.jquery.com/jquery-3.5.1.min.js
// @license     private
// @downloadURL https://github.com/MyNewGroup/fse-scripts/raw/master/fseimproved.user.js
// @updateURL   https://github.com/MyNewGroup/fse-scripts/raw/master/fseimproved.meta.js
// ==/UserScript==

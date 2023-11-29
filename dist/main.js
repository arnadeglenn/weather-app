(()=>{"use strict";var e={d:(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{y:()=>r});const n=function(e,n){n.innerHTML=e>40?'<title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" />':'<title>weather-sunny</title><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />'};let r={};const t=document.querySelector("input");document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();let n=t.value;c(n)}));const c=async function(e){try{(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=edf65ac3b32a48938e0221942232011&q=${e}&days=3`,{mode:"cors"})).json().then((e=>o(e))).then((e=>function(){const e=document.querySelector(".main-temp-svg");e.innerHTML="",n(r.currentPrecip,e);const t=document.querySelector("h3");t.innerHTML="",t.innerHTML=`${r.currentFTemp} &deg;`;const c=document.querySelector(".location");c.innerHTML="",c.innerHTML=r.location;const o=document.querySelector(".current-precip");o.innerHTML="",o.innerHTML=`${r.currentPrecip}% Precipitation`;const i=document.querySelector(".current-humid");i.innerHTML="",i.innerHTML=`${r.currentHumidity}% Humidity`;const a=document.querySelector(".day-1-svg");a.innerHTML="",n(r.currentPrecip,a);const d=document.querySelector(".max-1");d.innerHTML="",d.innerHTML=`Max: ${r.currentMax}&deg;`;const u=document.querySelector(".min-1");u.innerHTML="",u.innerHTML=`Min: ${r.currentMin}&deg;`;const s=document.querySelector(".precip-1");s.innerHTML="",s.innerHTML=`Precip: ${r.currentPrecip}%`;const M=document.querySelector(".date-1");M.innerHTML="",M.innerHTML=r.currentDate;const y=document.querySelector(".day-2-svg");y.innerHTML="",n(r.secondPrecip,y);const L=document.querySelector(".max-2");L.innerHTML="",L.innerHTML=`Max: ${r.secondMax}&deg;`;const m=document.querySelector(".min-2");m.innerHTML="",m.innerHTML=`Min: ${r.secondMin}&deg;`;const l=document.querySelector(".precip-2");l.innerHTML="",l.innerHTML=`Precip: ${r.secondPrecip}%`;const f=document.querySelector(".date-2");f.innerHTML="",f.innerHTML=r.secondDate;const p=document.querySelector(".day-3-svg");p.innerHTML="",n(r.thirdPrecip,p);const H=document.querySelector(".max-3");H.innerHTML="",H.innerHTML=`Max: ${r.thirdMax}&deg;`;const T=document.querySelector(".min-3");T.innerHTML="",T.innerHTML=`Min: ${r.thirdMin}`;const C=document.querySelector(".precip-3");C.innerHTML="",C.innerHTML=`Precip: ${r.thirdPrecip}%`;const h=document.querySelector(".date-3");h.innerHTML="",h.innerHTML=r.thirdDate}()))}catch(e){const n=document.querySelector("h3");n.innerHTML="",n.innerHTML="Error"}};let o=function(e){console.log(e),r.location=e.location.name,r.currentDate=e.forecast.forecastday[0].date,r.currentMin=e.forecast.forecastday[0].day.mintemp_f,r.currentMax=e.forecast.forecastday[0].day.maxtemp_f,r.currentFTemp=e.current.temp_f,r.currentHumidity=e.current.humidity,r.currentPrecip=e.forecast.forecastday[0].day.daily_chance_of_rain,r.secondDate=e.forecast.forecastday[1].date,r.secondMin=e.forecast.forecastday[1].day.mintemp_f,r.secondMax=e.forecast.forecastday[1].day.maxtemp_f,r.secondPrecip=e.forecast.forecastday[1].day.daily_chance_of_rain,r.thirdDate=e.forecast.forecastday[2].date,r.thirdMin=e.forecast.forecastday[2].day.mintemp_f,r.thirdMax=e.forecast.forecastday[2].day.maxtemp_f,r.thirdPrecip=e.forecast.forecastday[2].day.daily_chance_of_rain,console.log(r)};c("Los Angeles")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV2Q2pFLEVBQVl3QyxXQUFhWSxFQUFTSSxTQUFTQyxZQUFZLEdBQUdDLEtBQzFEMUQsRUFBWXFDLFVBQVllLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSUMsVUFDN0Q1RCxFQUFZbUMsVUFBWWlCLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSUUsVUFDN0Q3RCxFQUFZaUMsYUFDVm1CLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSU0scUJBRXZDakUsRUFBWWlELFVBQVlHLEVBQVNJLFNBQVNDLFlBQVksR0FBR0MsS0FDekQxRCxFQUFZOEMsU0FBV00sRUFBU0ksU0FBU0MsWUFBWSxHQUFHRSxJQUFJQyxVQUM1RDVELEVBQVk0QyxTQUFXUSxFQUFTSSxTQUFTQyxZQUFZLEdBQUdFLElBQUlFLFVBQzVEN0QsRUFBWTBDLFlBQ1ZVLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSU0scUJBRXZDWixRQUFRQyxJQUFJdEQsRUFDZCxFQUVBUyxFQUFlLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lZGl0LWRvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IHdlYXRoZXJJbmZvIH0gZnJvbSBcIi5cIjtcblxuY29uc3QgcmVuZGVyRE9NID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtYWluVGVtcFNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10ZW1wLXN2Z1wiKTtcbiAgbWFpblRlbXBTVkcuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmFpblN1blNWRyh3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwLCBtYWluVGVtcFNWRyk7XG5cbiAgY29uc3QgbWFpblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDNcIik7XG4gIG1haW5UZW1wLmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW5UZW1wLmlubmVySFRNTCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRGVGVtcH0gJmRlZztgO1xuXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gXCJcIjtcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gd2VhdGhlckluZm8ubG9jYXRpb247XG5cbiAgY29uc3QgY3VycmVudFByZWNpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1wcmVjaXBcIik7XG4gIGN1cnJlbnRQcmVjaXAuaW5uZXJIVE1MID0gXCJcIjtcbiAgY3VycmVudFByZWNpcC5pbm5lckhUTUwgPSBgJHt3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwfSUgUHJlY2lwaXRhdGlvbmA7XG5cbiAgY29uc3QgY3VycmVudEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LWh1bWlkXCIpO1xuICBjdXJyZW50SHVtaWQuaW5uZXJIVE1MID0gXCJcIjtcbiAgY3VycmVudEh1bWlkLmlubmVySFRNTCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRIdW1pZGl0eX0lIEh1bWlkaXR5YDtcblxuICBjb25zdCBkYXlPbmVTVkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRheS0xLXN2Z1wiKTtcbiAgZGF5T25lU1ZHLmlubmVySFRNTCA9IFwiXCI7XG4gIHJhaW5TdW5TVkcod2VhdGhlckluZm8uY3VycmVudFByZWNpcCwgZGF5T25lU1ZHKTtcblxuICBjb25zdCBtYXhUZW1wT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYXgtMVwiKTtcbiAgbWF4VGVtcE9uZS5pbm5lckhUTUwgPSBcIlwiO1xuICBtYXhUZW1wT25lLmlubmVySFRNTCA9IGBNYXg6ICR7d2VhdGhlckluZm8uY3VycmVudE1heH0mZGVnO2A7XG5cbiAgY29uc3QgbWluVGVtcE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluLTFcIik7XG4gIG1pblRlbXBPbmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWluVGVtcE9uZS5pbm5lckhUTUwgPSBgTWluOiAke3dlYXRoZXJJbmZvLmN1cnJlbnRNaW59JmRlZztgO1xuXG4gIGNvbnN0IHByZWNpcE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlY2lwLTFcIik7XG4gIHByZWNpcE9uZS5pbm5lckhUTUwgPSBcIlwiO1xuICBwcmVjaXBPbmUuaW5uZXJIVE1MID0gYFByZWNpcDogJHt3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwfSVgO1xuXG4gIGNvbnN0IGRhdGVPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtMVwiKTtcbiAgZGF0ZU9uZS5pbm5lckhUTUwgPSBcIlwiO1xuICBkYXRlT25lLmlubmVySFRNTCA9IHdlYXRoZXJJbmZvLmN1cnJlbnREYXRlO1xuXG4gIGNvbnN0IGRheVR3b1NWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF5LTItc3ZnXCIpO1xuICBkYXlUd29TVkcuaW5uZXJIVE1MID0gXCJcIjtcbiAgcmFpblN1blNWRyh3ZWF0aGVySW5mby5zZWNvbmRQcmVjaXAsIGRheVR3b1NWRyk7XG5cbiAgY29uc3QgbWF4VGVtcFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWF4LTJcIik7XG4gIG1heFRlbXBUd28uaW5uZXJIVE1MID0gXCJcIjtcbiAgbWF4VGVtcFR3by5pbm5lckhUTUwgPSBgTWF4OiAke3dlYXRoZXJJbmZvLnNlY29uZE1heH0mZGVnO2A7XG5cbiAgY29uc3QgbWluVGVtcFR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluLTJcIik7XG4gIG1pblRlbXBUd28uaW5uZXJIVE1MID0gXCJcIjtcbiAgbWluVGVtcFR3by5pbm5lckhUTUwgPSBgTWluOiAke3dlYXRoZXJJbmZvLnNlY29uZE1pbn0mZGVnO2A7XG5cbiAgY29uc3QgcHJlY2lwVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVjaXAtMlwiKTtcbiAgcHJlY2lwVHdvLmlubmVySFRNTCA9IFwiXCI7XG4gIHByZWNpcFR3by5pbm5lckhUTUwgPSBgUHJlY2lwOiAke3dlYXRoZXJJbmZvLnNlY29uZFByZWNpcH0lYDtcblxuICBjb25zdCBkYXRlVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLTJcIik7XG4gIGRhdGVUd28uaW5uZXJIVE1MID0gXCJcIjtcbiAgZGF0ZVR3by5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby5zZWNvbmREYXRlO1xuXG4gIGNvbnN0IGRheVRocmVlU1ZHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXktMy1zdmdcIik7XG4gIGRheVRocmVlU1ZHLmlubmVySFRNTCA9IFwiXCI7XG4gIHJhaW5TdW5TVkcod2VhdGhlckluZm8udGhpcmRQcmVjaXAsIGRheVRocmVlU1ZHKTtcblxuICBjb25zdCBtYXhUZW1wVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1heC0zXCIpO1xuICBtYXhUZW1wVGhyZWUuaW5uZXJIVE1MID0gXCJcIjtcbiAgbWF4VGVtcFRocmVlLmlubmVySFRNTCA9IGBNYXg6ICR7d2VhdGhlckluZm8udGhpcmRNYXh9JmRlZztgO1xuXG4gIGNvbnN0IG1pblRlbXBUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWluLTNcIik7XG4gIG1pblRlbXBUaHJlZS5pbm5lckhUTUwgPSBcIlwiO1xuICBtaW5UZW1wVGhyZWUuaW5uZXJIVE1MID0gYE1pbjogJHt3ZWF0aGVySW5mby50aGlyZE1pbn1gO1xuXG4gIGNvbnN0IHByZWNpcFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVjaXAtM1wiKTtcbiAgcHJlY2lwVGhyZWUuaW5uZXJIVE1MID0gXCJcIjtcbiAgcHJlY2lwVGhyZWUuaW5uZXJIVE1MID0gYFByZWNpcDogJHt3ZWF0aGVySW5mby50aGlyZFByZWNpcH0lYDtcblxuICBjb25zdCBkYXRlVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtM1wiKTtcbiAgZGF0ZVRocmVlLmlubmVySFRNTCA9IFwiXCI7XG4gIGRhdGVUaHJlZS5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby50aGlyZERhdGU7XG59O1xuXG5jb25zdCByYWluU3VuU1ZHID0gZnVuY3Rpb24gKHByZWNpcCwgbm9kZSkge1xuICBpZiAocHJlY2lwID4gNDApIHtcbiAgICBub2RlLmlubmVySFRNTCA9XG4gICAgICAnPHRpdGxlPndlYXRoZXItcG91cmluZzwvdGl0bGU+PHBhdGggZD1cIk05LDEyQzkuNTMsMTIuMTQgOS44NSwxMi42OSA5LjcxLDEzLjIyTDguNDEsMTguMDVDOC4yNywxOC41OSA3LjcyLDE4LjkgNy4xOSwxOC43NkM2LjY1LDE4LjYyIDYuMzQsMTguMDcgNi41LDE3LjU0TDcuNzgsMTIuNzFDNy45MiwxMi4xNyA4LjQ3LDExLjg2IDksMTJNMTMsMTJDMTMuNTMsMTIuMTQgMTMuODUsMTIuNjkgMTMuNzEsMTMuMjJMMTEuNjQsMjAuOTVDMTEuNSwyMS41IDEwLjk1LDIxLjggMTAuNDEsMjEuNjZDOS44OCwyMS41IDkuNTYsMjAuOTcgOS43LDIwLjQzTDExLjc4LDEyLjcxQzExLjkyLDEyLjE3IDEyLjQ3LDExLjg2IDEzLDEyTTE3LDEyQzE3LjUzLDEyLjE0IDE3Ljg1LDEyLjY5IDE3LjcxLDEzLjIyTDE2LjQxLDE4LjA1QzE2LjI3LDE4LjU5IDE1LjcyLDE4LjkgMTUuMTksMTguNzZDMTQuNjUsMTguNjIgMTQuMzQsMTguMDcgMTQuNSwxNy41NEwxNS43OCwxMi43MUMxNS45MiwxMi4xNyAxNi40NywxMS44NiAxNywxMk0xNywxMFY5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFDMywxMi4xMSAzLjYsMTMuMDggNC41LDEzLjZWMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQzIDQsMTUuNiAzLjUsMTUuMzJWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQzIzLDEzLjUgMjIuMiwxNC43NyAyMSwxNS40NlYxNS40NkMyMC41LDE1LjczIDE5LjkxLDE1LjU3IDE5LjYzLDE1LjA5QzE5LjM2LDE0LjYxIDE5LjUsMTQgMjAsMTMuNzJWMTMuNzNDMjAuNiwxMy4zOSAyMSwxMi43NCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdaXCIgLz4nO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuaW5uZXJIVE1MID1cbiAgICAgICc8dGl0bGU+d2VhdGhlci1zdW5ueTwvdGl0bGU+PHBhdGggZD1cIk0xMiw3QTUsNSAwIDAsMSAxNywxMkE1LDUgMCAwLDEgMTIsMTdBNSw1IDAgMCwxIDcsMTJBNSw1IDAgMCwxIDEyLDdNMTIsOUEzLDMgMCAwLDAgOSwxMkEzLDMgMCAwLDAgMTIsMTVBMywzIDAgMCwwIDE1LDEyQTMsMyAwIDAsMCAxMiw5TTEyLDJMMTQuMzksNS40MkMxMy42NSw1LjE1IDEyLjg0LDUgMTIsNUMxMS4xNiw1IDEwLjM1LDUuMTUgOS42MSw1LjQyTDEyLDJNMy4zNCw3TDcuNSw2LjY1QzYuOSw3LjE2IDYuMzYsNy43OCA1Ljk0LDguNUM1LjUsOS4yNCA1LjI1LDEwIDUuMTEsMTAuNzlMMy4zNCw3TTMuMzYsMTdMNS4xMiwxMy4yM0M1LjI2LDE0IDUuNTMsMTQuNzggNS45NSwxNS41QzYuMzcsMTYuMjQgNi45MSwxNi44NiA3LjUsMTcuMzdMMy4zNiwxN00yMC42NSw3TDE4Ljg4LDEwLjc5QzE4Ljc0LDEwIDE4LjQ3LDkuMjMgMTguMDUsOC41QzE3LjYzLDcuNzggMTcuMSw3LjE1IDE2LjUsNi42NEwyMC42NSw3TTIwLjY0LDE3TDE2LjUsMTcuMzZDMTcuMDksMTYuODUgMTcuNjIsMTYuMjIgMTguMDQsMTUuNUMxOC40NiwxNC43NyAxOC43MywxNCAxOC44NywxMy4yMUwyMC42NCwxN00xMiwyMkw5LjU5LDE4LjU2QzEwLjMzLDE4LjgzIDExLjE0LDE5IDEyLDE5QzEyLjgyLDE5IDEzLjYzLDE4LjgzIDE0LjM3LDE4LjU2TDEyLDIyWlwiIC8+JztcbiAgfVxufTtcblxuZXhwb3J0IHsgcmVuZGVyRE9NLCByYWluU3VuU1ZHIH07XG5cbi8vIFJhaW5cbi8vIDxzdmcgY2xhc3M9J2RheS0xLXN2ZycgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+d2VhdGhlci1wb3VyaW5nPC90aXRsZT48cGF0aCBkPVwiTTksMTJDOS41MywxMi4xNCA5Ljg1LDEyLjY5IDkuNzEsMTMuMjJMOC40MSwxOC4wNUM4LjI3LDE4LjU5IDcuNzIsMTguOSA3LjE5LDE4Ljc2QzYuNjUsMTguNjIgNi4zNCwxOC4wNyA2LjUsMTcuNTRMNy43OCwxMi43MUM3LjkyLDEyLjE3IDguNDcsMTEuODYgOSwxMk0xMywxMkMxMy41MywxMi4xNCAxMy44NSwxMi42OSAxMy43MSwxMy4yMkwxMS42NCwyMC45NUMxMS41LDIxLjUgMTAuOTUsMjEuOCAxMC40MSwyMS42NkM5Ljg4LDIxLjUgOS41NiwyMC45NyA5LjcsMjAuNDNMMTEuNzgsMTIuNzFDMTEuOTIsMTIuMTcgMTIuNDcsMTEuODYgMTMsMTJNMTcsMTJDMTcuNTMsMTIuMTQgMTcuODUsMTIuNjkgMTcuNzEsMTMuMjJMMTYuNDEsMTguMDVDMTYuMjcsMTguNTkgMTUuNzIsMTguOSAxNS4xOSwxOC43NkMxNC42NSwxOC42MiAxNC4zNCwxOC4wNyAxNC41LDE3LjU0TDE1Ljc4LDEyLjcxQzE1LjkyLDEyLjE3IDE2LjQ3LDExLjg2IDE3LDEyTTE3LDEwVjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUMzLDEyLjExIDMuNiwxMy4wOCA0LjUsMTMuNlYxMy41OUM1LDEzLjg3IDUuMTQsMTQuNSA0Ljg3LDE0Ljk2QzQuNTksMTUuNDMgNCwxNS42IDMuNSwxNS4zMlYxNS4zM0MyLDE0LjQ3IDEsMTIuODUgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJDMjMsMTMuNSAyMi4yLDE0Ljc3IDIxLDE1LjQ2VjE1LjQ2QzIwLjUsMTUuNzMgMTkuOTEsMTUuNTcgMTkuNjMsMTUuMDlDMTkuMzYsMTQuNjEgMTkuNSwxNCAyMCwxMy43MlYxMy43M0MyMC42LDEzLjM5IDIxLDEyLjc0IDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1pcIiAvPjwvc3ZnPlxuLy8gU3VuXG4vLyA8c3ZnIGNsYXNzID0gJ21haW4tdGVtcC1zdmcnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItc3Vubnk8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsN0E1LDUgMCAwLDEgMTcsMTJBNSw1IDAgMCwxIDEyLDE3QTUsNSAwIDAsMSA3LDEyQTUsNSAwIDAsMSAxMiw3TTEyLDlBMywzIDAgMCwwIDksMTJBMywzIDAgMCwwIDEyLDE1QTMsMyAwIDAsMCAxNSwxMkEzLDMgMCAwLDAgMTIsOU0xMiwyTDE0LjM5LDUuNDJDMTMuNjUsNS4xNSAxMi44NCw1IDEyLDVDMTEuMTYsNSAxMC4zNSw1LjE1IDkuNjEsNS40MkwxMiwyTTMuMzQsN0w3LjUsNi42NUM2LjksNy4xNiA2LjM2LDcuNzggNS45NCw4LjVDNS41LDkuMjQgNS4yNSwxMCA1LjExLDEwLjc5TDMuMzQsN00zLjM2LDE3TDUuMTIsMTMuMjNDNS4yNiwxNCA1LjUzLDE0Ljc4IDUuOTUsMTUuNUM2LjM3LDE2LjI0IDYuOTEsMTYuODYgNy41LDE3LjM3TDMuMzYsMTdNMjAuNjUsN0wxOC44OCwxMC43OUMxOC43NCwxMCAxOC40Nyw5LjIzIDE4LjA1LDguNUMxNy42Myw3Ljc4IDE3LjEsNy4xNSAxNi41LDYuNjRMMjAuNjUsN00yMC42NCwxN0wxNi41LDE3LjM2QzE3LjA5LDE2Ljg1IDE3LjYyLDE2LjIyIDE4LjA0LDE1LjVDMTguNDYsMTQuNzcgMTguNzMsMTQgMTguODcsMTMuMjFMMjAuNjQsMTdNMTIsMjJMOS41OSwxOC41NkMxMC4zMywxOC44MyAxMS4xNCwxOSAxMiwxOUMxMi44MiwxOSAxMy42MywxOC44MyAxNC4zNywxOC41NkwxMiwyMlpcIiAvPjwvc3ZnPlxuIiwiaW1wb3J0IHsgcmVuZGVyRE9NLCByYWluU3VuU1ZHIH0gZnJvbSBcIi4vZWRpdC1kb21cIjtcblxubGV0IHdlYXRoZXJJbmZvID0ge307XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG4gIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKTtcbn0pO1xuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWVkZjY1YWMzYjMyYTQ4OTM4ZTAyMjE5NDIyMzIwMTEmcT0ke2xvY2F0aW9ufSZkYXlzPTNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG4gICAgcmVzcG9uc2VcbiAgICAgIC5qc29uKClcbiAgICAgIC50aGVuKCh3ZWF0aGVyKSA9PiB3ZWF0aGVySlNPTih3ZWF0aGVyKSlcbiAgICAgIC50aGVuKChvYmplY3QpID0+IHJlbmRlckRPTSgpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoM1wiKTtcbiAgICBtYWluVGVtcC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIG1haW5UZW1wLmlubmVySFRNTCA9IFwiRXJyb3JcIjtcbiAgfVxufTtcblxubGV0IHdlYXRoZXJKU09OID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgd2VhdGhlckluZm8ubG9jYXRpb24gPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICB3ZWF0aGVySW5mby5jdXJyZW50RGF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7XG4gIHdlYXRoZXJJbmZvLmN1cnJlbnRNaW4gPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mO1xuICB3ZWF0aGVySW5mby5jdXJyZW50TWF4ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcbiAgd2VhdGhlckluZm8uY3VycmVudEZUZW1wID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4gIHdlYXRoZXJJbmZvLmN1cnJlbnRIdW1pZGl0eSA9IHJlc3BvbnNlLmN1cnJlbnQuaHVtaWRpdHk7XG4gIHdlYXRoZXJJbmZvLmN1cnJlbnRQcmVjaXAgPVxuICAgIHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICB3ZWF0aGVySW5mby5zZWNvbmREYXRlID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZTtcbiAgd2VhdGhlckluZm8uc2Vjb25kTWluID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjtcbiAgd2VhdGhlckluZm8uc2Vjb25kTWF4ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcbiAgd2VhdGhlckluZm8uc2Vjb25kUHJlY2lwID1cbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgd2VhdGhlckluZm8udGhpcmREYXRlID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF0ZTtcbiAgd2VhdGhlckluZm8udGhpcmRNaW4gPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuICB3ZWF0aGVySW5mby50aGlyZE1heCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG4gIHdlYXRoZXJJbmZvLnRoaXJkUHJlY2lwID1cbiAgICByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgY29uc29sZS5sb2cod2VhdGhlckluZm8pO1xufTtcblxuZ2V0V2VhdGhlckRhdGEoXCJMb3MgQW5nZWxlc1wiKTtcblxuZXhwb3J0IHsgd2VhdGhlckluZm8gfTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInJhaW5TdW5TVkciLCJwcmVjaXAiLCJub2RlIiwiaW5uZXJIVE1MIiwid2VhdGhlckluZm8iLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsInZhbHVlIiwiZ2V0V2VhdGhlckRhdGEiLCJhc3luYyIsImZldGNoIiwibW9kZSIsImpzb24iLCJ0aGVuIiwid2VhdGhlciIsIndlYXRoZXJKU09OIiwib2JqZWN0IiwibWFpblRlbXBTVkciLCJjdXJyZW50UHJlY2lwIiwibWFpblRlbXAiLCJjdXJyZW50RlRlbXAiLCJjdXJyZW50SHVtaWQiLCJjdXJyZW50SHVtaWRpdHkiLCJkYXlPbmVTVkciLCJtYXhUZW1wT25lIiwiY3VycmVudE1heCIsIm1pblRlbXBPbmUiLCJjdXJyZW50TWluIiwicHJlY2lwT25lIiwiZGF0ZU9uZSIsImN1cnJlbnREYXRlIiwiZGF5VHdvU1ZHIiwic2Vjb25kUHJlY2lwIiwibWF4VGVtcFR3byIsInNlY29uZE1heCIsIm1pblRlbXBUd28iLCJzZWNvbmRNaW4iLCJwcmVjaXBUd28iLCJkYXRlVHdvIiwic2Vjb25kRGF0ZSIsImRheVRocmVlU1ZHIiwidGhpcmRQcmVjaXAiLCJtYXhUZW1wVGhyZWUiLCJ0aGlyZE1heCIsIm1pblRlbXBUaHJlZSIsInRoaXJkTWluIiwicHJlY2lwVGhyZWUiLCJkYXRlVGhyZWUiLCJ0aGlyZERhdGUiLCJyZW5kZXJET00iLCJlcnJvciIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF0ZSIsImRheSIsIm1pbnRlbXBfZiIsIm1heHRlbXBfZiIsImN1cnJlbnQiLCJ0ZW1wX2YiLCJodW1pZGl0eSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIl0sInNvdXJjZVJvb3QiOiIifQ==
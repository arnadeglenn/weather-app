(()=>{"use strict";var e={d:(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},o:(e,n)=>Object.prototype.hasOwnProperty.call(e,n)};e.d({},{y:()=>t});const n=function(){const e=document.querySelector(".main-temp-svg");e.innerHTML="",r(t.currentPrecip,e);const n=document.querySelector("h3");n.innerHTML="",n.innerHTML=`${t.currentFTemp} &deg;`;const c=document.querySelector(".location");c.innerHTML="",c.innerHTML=t.location;const o=document.querySelector(".current-precip");o.innerHTML="",o.innerHTML=`${t.currentPrecip}% Precipitation`;const i=document.querySelector(".current-humid");i.innerHTML="",i.innerHTML=`${t.currentHumidity}% Humidity`;const a=document.querySelector(".day-1-svg");a.innerHTML="",r(t.currentPrecip,a);const d=document.querySelector(".max-1");d.innerHTML="",d.innerHTML=`Max: ${t.currentMax}&deg;`;const u=document.querySelector(".min-1");u.innerHTML="",u.innerHTML=`Min: ${t.currentMin}&deg;`;const s=document.querySelector(".precip-1");s.innerHTML="",s.innerHTML=`Precip: ${t.currentPrecip}%`;const M=document.querySelector(".date-1");M.innerHTML="",M.innerHTML=t.currentDate;const y=document.querySelector(".day-2-svg");y.innerHTML="",r(t.secondPrecip,y);const L=document.querySelector(".max-2");L.innerHTML="",L.innerHTML=`Max: ${t.secondMax}&deg;`;const m=document.querySelector(".min-2");m.innerHTML="",m.innerHTML=`Min: ${t.secondMin}&deg;`;const l=document.querySelector(".precip-2");l.innerHTML="",l.innerHTML=`Precip: ${t.secondPrecip}%`;const f=document.querySelector(".date-2");f.innerHTML="",f.innerHTML=t.secondDate;const p=document.querySelector(".day-3-svg");p.innerHTML="",r(t.thirdPrecip,p);const H=document.querySelector(".max-3");H.innerHTML="",H.innerHTML=`Max: ${t.thirdMax}&deg;`;const T=document.querySelector(".min-3");T.innerHTML="",T.innerHTML=`Min: ${t.thirdMin}`;const C=document.querySelector(".precip-3");C.innerHTML="",C.innerHTML=`Precip: ${t.thirdPrecip}%`;const h=document.querySelector(".date-3");h.innerHTML="",h.innerHTML=t.thirdDate},r=function(e,n){n.innerHTML=e>40?'<title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" />':'<title>weather-sunny</title><path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z" />'};let t={};const c=document.querySelector("input");document.querySelector("form").addEventListener("submit",(e=>{e.preventDefault();let r=c.value;o(r),n()}));const o=async function(e){(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=edf65ac3b32a48938e0221942232011&q=${e}&days=3`,{mode:"cors"})).json().then((e=>i(e)))};o().catch((e=>{const n=document.querySelector("h3");n.innerHTML="",n.innerHTML="Error"}));let i=function(e){console.log(e),t.location=e.location.name,t.currentDate=e.forecast.forecastday[0].date,t.currentMin=e.forecast.forecastday[0].day.mintemp_f,t.currentMax=e.forecast.forecastday[0].day.maxtemp_f,t.currentFTemp=e.current.temp_f,t.currentHumidity=e.current.humidity,t.currentPrecip=e.forecast.forecastday[0].day.daily_chance_of_rain,t.secondDate=e.forecast.forecastday[1].date,t.secondMin=e.forecast.forecastday[1].day.mintemp_f,t.secondMax=e.forecast.forecastday[1].day.maxtemp_f,t.secondPrecip=e.forecast.forecastday[1].day.daily_chance_of_rain,t.thirdDate=e.forecast.forecastday[2].date,t.thirdMin=e.forecast.forecastday[2].day.mintemp_f,t.thirdMax=e.forecast.forecastday[2].day.maxtemp_f,t.thirdPrecip=e.forecast.forecastday[2].day.daily_chance_of_rain,console.log(t)};o("london"),n()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixVQUFZOEIsRUFBU0ksU0FBU0MsWUFBWSxHQUFHRSxJQUFJQyxVQUM3RDFELEVBQVlrQixVQUFZZ0MsRUFBU0ksU0FBU0MsWUFBWSxHQUFHRSxJQUFJRSxVQUM3RDNELEVBQVlnQixhQUFla0MsRUFBU0ksU0FBU0MsWUFBWSxHQUFHRSxJQUFJTSxxQkFFaEUvRCxFQUFZZ0MsVUFBWWtCLEVBQVNJLFNBQVNDLFlBQVksR0FBR0MsS0FDekR4RCxFQUFZNkIsU0FBV3FCLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSUMsVUFDNUQxRCxFQUFZMkIsU0FBV3VCLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSUUsVUFDNUQzRCxFQUFZeUIsWUFBY3lCLEVBQVNJLFNBQVNDLFlBQVksR0FBR0UsSUFBSU0scUJBRS9EWixRQUFRQyxJQUFJcEQsRUFDaEIsRUFFQXdDLEVBQWUsVUFDZjlDLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9lZGl0LWRvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IHdlYXRoZXJJbmZvIH0gZnJvbSBcIi5cIjtcblxuXG5jb25zdCByZW5kZXJET00gPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBtYWluVGVtcFNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXRlbXAtc3ZnJyk7XG4gICAgbWFpblRlbXBTVkcuaW5uZXJIVE1MID0gJyc7XG4gICAgcmFpblN1blNWRyh3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwLCBtYWluVGVtcFNWRyk7XG5cbiAgICBjb25zdCBtYWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJyk7XG4gICAgbWFpblRlbXAuaW5uZXJIVE1MID0gJyc7XG4gICAgbWFpblRlbXAuaW5uZXJIVE1MID0gYCR7d2VhdGhlckluZm8uY3VycmVudEZUZW1wfSAmZGVnO2A7XG5cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpOyAgICBcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby5sb2NhdGlvbjtcblxuICAgIGNvbnN0IGN1cnJlbnRQcmVjaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wcmVjaXAnKTtcbiAgICBjdXJyZW50UHJlY2lwLmlubmVySFRNTCA9ICcnO1xuICAgIGN1cnJlbnRQcmVjaXAuaW5uZXJIVE1MID0gYCR7d2VhdGhlckluZm8uY3VycmVudFByZWNpcH0lIFByZWNpcGl0YXRpb25gO1xuXG4gICAgY29uc3QgY3VycmVudEh1bWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtaHVtaWQnKTtcbiAgICBjdXJyZW50SHVtaWQuaW5uZXJIVE1MID0gJyc7XG4gICAgY3VycmVudEh1bWlkLmlubmVySFRNTCA9IGAke3dlYXRoZXJJbmZvLmN1cnJlbnRIdW1pZGl0eX0lIEh1bWlkaXR5YDtcblxuICAgIGNvbnN0IGRheU9uZVNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktMS1zdmcnKTtcbiAgICBkYXlPbmVTVkcuaW5uZXJIVE1MID0gJyc7XG4gICAgcmFpblN1blNWRyh3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwLCBkYXlPbmVTVkcpO1xuXG4gICAgY29uc3QgbWF4VGVtcE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgtMScpO1xuICAgIG1heFRlbXBPbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgbWF4VGVtcE9uZS5pbm5lckhUTUwgPSBgTWF4OiAke3dlYXRoZXJJbmZvLmN1cnJlbnRNYXh9JmRlZztgO1xuXG4gICAgY29uc3QgbWluVGVtcE9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4tMScpO1xuICAgIG1pblRlbXBPbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgbWluVGVtcE9uZS5pbm5lckhUTUwgPSBgTWluOiAke3dlYXRoZXJJbmZvLmN1cnJlbnRNaW59JmRlZztgO1xuXG4gICAgY29uc3QgcHJlY2lwT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWNpcC0xJyk7XG4gICAgcHJlY2lwT25lLmlubmVySFRNTCA9ICcnO1xuICAgIHByZWNpcE9uZS5pbm5lckhUTUwgPSBgUHJlY2lwOiAke3dlYXRoZXJJbmZvLmN1cnJlbnRQcmVjaXB9JWA7XG5cbiAgICBjb25zdCBkYXRlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtMScpO1xuICAgIGRhdGVPbmUuaW5uZXJIVE1MID0gJyc7XG4gICAgZGF0ZU9uZS5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby5jdXJyZW50RGF0ZTtcblxuICAgIGNvbnN0IGRheVR3b1NWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktMi1zdmcnKTtcbiAgICBkYXlUd29TVkcuaW5uZXJIVE1MID0gJyc7XG4gICAgcmFpblN1blNWRyh3ZWF0aGVySW5mby5zZWNvbmRQcmVjaXAsIGRheVR3b1NWRyk7XG5cbiAgICBjb25zdCBtYXhUZW1wVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heC0yJyk7XG4gICAgbWF4VGVtcFR3by5pbm5lckhUTUwgPSAnJztcbiAgICBtYXhUZW1wVHdvLmlubmVySFRNTCA9IGBNYXg6ICR7d2VhdGhlckluZm8uc2Vjb25kTWF4fSZkZWc7YDtcblxuICAgIGNvbnN0IG1pblRlbXBUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluLTInKTtcbiAgICBtaW5UZW1wVHdvLmlubmVySFRNTCA9ICcnO1xuICAgIG1pblRlbXBUd28uaW5uZXJIVE1MID0gYE1pbjogJHt3ZWF0aGVySW5mby5zZWNvbmRNaW59JmRlZztgO1xuXG4gICAgY29uc3QgcHJlY2lwVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZWNpcC0yJyk7XG4gICAgcHJlY2lwVHdvLmlubmVySFRNTCA9ICcnO1xuICAgIHByZWNpcFR3by5pbm5lckhUTUwgPSBgUHJlY2lwOiAke3dlYXRoZXJJbmZvLnNlY29uZFByZWNpcH0lYDtcblxuICAgIGNvbnN0IGRhdGVUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS0yJyk7XG4gICAgZGF0ZVR3by5pbm5lckhUTUwgPSAnJztcbiAgICBkYXRlVHdvLmlubmVySFRNTCA9IHdlYXRoZXJJbmZvLnNlY29uZERhdGU7XG5cbiAgICBjb25zdCBkYXlUaHJlZVNWRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXktMy1zdmcnKTtcbiAgICBkYXlUaHJlZVNWRy5pbm5lckhUTUwgPSAnJztcbiAgICByYWluU3VuU1ZHKHdlYXRoZXJJbmZvLnRoaXJkUHJlY2lwLCBkYXlUaHJlZVNWRyk7XG5cbiAgICBjb25zdCBtYXhUZW1wVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4LTMnKTtcbiAgICBtYXhUZW1wVGhyZWUuaW5uZXJIVE1MID0gJyc7XG4gICAgbWF4VGVtcFRocmVlLmlubmVySFRNTCA9IGBNYXg6ICR7d2VhdGhlckluZm8udGhpcmRNYXh9JmRlZztgO1xuXG4gICAgY29uc3QgbWluVGVtcFRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbi0zJyk7XG4gICAgbWluVGVtcFRocmVlLmlubmVySFRNTCA9ICcnO1xuICAgIG1pblRlbXBUaHJlZS5pbm5lckhUTUwgPSBgTWluOiAke3dlYXRoZXJJbmZvLnRoaXJkTWlufWA7XG5cbiAgICBjb25zdCBwcmVjaXBUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXAtMycpO1xuICAgIHByZWNpcFRocmVlLmlubmVySFRNTCA9ICcnO1xuICAgIHByZWNpcFRocmVlLmlubmVySFRNTCA9IGBQcmVjaXA6ICR7d2VhdGhlckluZm8udGhpcmRQcmVjaXB9JWA7XG5cbiAgICBjb25zdCBkYXRlVGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS0zJyk7XG4gICAgZGF0ZVRocmVlLmlubmVySFRNTCA9ICcnO1xuICAgIGRhdGVUaHJlZS5pbm5lckhUTUwgPSB3ZWF0aGVySW5mby50aGlyZERhdGU7XG59XG5cblxuY29uc3QgcmFpblN1blNWRyA9IGZ1bmN0aW9uKHByZWNpcCwgbm9kZSkge1xuICAgIGlmIChwcmVjaXAgPiA0MCkge1xuICAgICAgICBub2RlLmlubmVySFRNTCA9ICc8dGl0bGU+d2VhdGhlci1wb3VyaW5nPC90aXRsZT48cGF0aCBkPVwiTTksMTJDOS41MywxMi4xNCA5Ljg1LDEyLjY5IDkuNzEsMTMuMjJMOC40MSwxOC4wNUM4LjI3LDE4LjU5IDcuNzIsMTguOSA3LjE5LDE4Ljc2QzYuNjUsMTguNjIgNi4zNCwxOC4wNyA2LjUsMTcuNTRMNy43OCwxMi43MUM3LjkyLDEyLjE3IDguNDcsMTEuODYgOSwxMk0xMywxMkMxMy41MywxMi4xNCAxMy44NSwxMi42OSAxMy43MSwxMy4yMkwxMS42NCwyMC45NUMxMS41LDIxLjUgMTAuOTUsMjEuOCAxMC40MSwyMS42NkM5Ljg4LDIxLjUgOS41NiwyMC45NyA5LjcsMjAuNDNMMTEuNzgsMTIuNzFDMTEuOTIsMTIuMTcgMTIuNDcsMTEuODYgMTMsMTJNMTcsMTJDMTcuNTMsMTIuMTQgMTcuODUsMTIuNjkgMTcuNzEsMTMuMjJMMTYuNDEsMTguMDVDMTYuMjcsMTguNTkgMTUuNzIsMTguOSAxNS4xOSwxOC43NkMxNC42NSwxOC42MiAxNC4zNCwxOC4wNyAxNC41LDE3LjU0TDE1Ljc4LDEyLjcxQzE1LjkyLDEyLjE3IDE2LjQ3LDExLjg2IDE3LDEyTTE3LDEwVjlBNSw1IDAgMCwwIDEyLDRDOS41LDQgNy40NSw1LjgyIDcuMDYsOC4xOUM2LjczLDguMDcgNi4zNyw4IDYsOEEzLDMgMCAwLDAgMywxMUMzLDEyLjExIDMuNiwxMy4wOCA0LjUsMTMuNlYxMy41OUM1LDEzLjg3IDUuMTQsMTQuNSA0Ljg3LDE0Ljk2QzQuNTksMTUuNDMgNCwxNS42IDMuNSwxNS4zMlYxNS4zM0MyLDE0LjQ3IDEsMTIuODUgMSwxMUE1LDUgMCAwLDEgNiw2QzcsMy42NSA5LjMsMiAxMiwyQzE1LjQzLDIgMTguMjQsNC42NiAxOC41LDguMDNMMTksOEE0LDQgMCAwLDEgMjMsMTJDMjMsMTMuNSAyMi4yLDE0Ljc3IDIxLDE1LjQ2VjE1LjQ2QzIwLjUsMTUuNzMgMTkuOTEsMTUuNTcgMTkuNjMsMTUuMDlDMTkuMzYsMTQuNjEgMTkuNSwxNCAyMCwxMy43MlYxMy43M0MyMC42LDEzLjM5IDIxLDEyLjc0IDIxLDEyQTIsMiAwIDAsMCAxOSwxMEgxN1pcIiAvPic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZS5pbm5lckhUTUwgPSAnPHRpdGxlPndlYXRoZXItc3Vubnk8L3RpdGxlPjxwYXRoIGQ9XCJNMTIsN0E1LDUgMCAwLDEgMTcsMTJBNSw1IDAgMCwxIDEyLDE3QTUsNSAwIDAsMSA3LDEyQTUsNSAwIDAsMSAxMiw3TTEyLDlBMywzIDAgMCwwIDksMTJBMywzIDAgMCwwIDEyLDE1QTMsMyAwIDAsMCAxNSwxMkEzLDMgMCAwLDAgMTIsOU0xMiwyTDE0LjM5LDUuNDJDMTMuNjUsNS4xNSAxMi44NCw1IDEyLDVDMTEuMTYsNSAxMC4zNSw1LjE1IDkuNjEsNS40MkwxMiwyTTMuMzQsN0w3LjUsNi42NUM2LjksNy4xNiA2LjM2LDcuNzggNS45NCw4LjVDNS41LDkuMjQgNS4yNSwxMCA1LjExLDEwLjc5TDMuMzQsN00zLjM2LDE3TDUuMTIsMTMuMjNDNS4yNiwxNCA1LjUzLDE0Ljc4IDUuOTUsMTUuNUM2LjM3LDE2LjI0IDYuOTEsMTYuODYgNy41LDE3LjM3TDMuMzYsMTdNMjAuNjUsN0wxOC44OCwxMC43OUMxOC43NCwxMCAxOC40Nyw5LjIzIDE4LjA1LDguNUMxNy42Myw3Ljc4IDE3LjEsNy4xNSAxNi41LDYuNjRMMjAuNjUsN00yMC42NCwxN0wxNi41LDE3LjM2QzE3LjA5LDE2Ljg1IDE3LjYyLDE2LjIyIDE4LjA0LDE1LjVDMTguNDYsMTQuNzcgMTguNzMsMTQgMTguODcsMTMuMjFMMjAuNjQsMTdNMTIsMjJMOS41OSwxOC41NkMxMC4zMywxOC44MyAxMS4xNCwxOSAxMiwxOUMxMi44MiwxOSAxMy42MywxOC44MyAxNC4zNywxOC41NkwxMiwyMlpcIiAvPic7XG4gICAgfVxufVxuXG5leHBvcnQge3JlbmRlckRPTSwgcmFpblN1blNWR307XG5cblxuXG4vLyBSYWluXG4vLyA8c3ZnIGNsYXNzPSdkYXktMS1zdmcnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPndlYXRoZXItcG91cmluZzwvdGl0bGU+PHBhdGggZD1cIk05LDEyQzkuNTMsMTIuMTQgOS44NSwxMi42OSA5LjcxLDEzLjIyTDguNDEsMTguMDVDOC4yNywxOC41OSA3LjcyLDE4LjkgNy4xOSwxOC43NkM2LjY1LDE4LjYyIDYuMzQsMTguMDcgNi41LDE3LjU0TDcuNzgsMTIuNzFDNy45MiwxMi4xNyA4LjQ3LDExLjg2IDksMTJNMTMsMTJDMTMuNTMsMTIuMTQgMTMuODUsMTIuNjkgMTMuNzEsMTMuMjJMMTEuNjQsMjAuOTVDMTEuNSwyMS41IDEwLjk1LDIxLjggMTAuNDEsMjEuNjZDOS44OCwyMS41IDkuNTYsMjAuOTcgOS43LDIwLjQzTDExLjc4LDEyLjcxQzExLjkyLDEyLjE3IDEyLjQ3LDExLjg2IDEzLDEyTTE3LDEyQzE3LjUzLDEyLjE0IDE3Ljg1LDEyLjY5IDE3LjcxLDEzLjIyTDE2LjQxLDE4LjA1QzE2LjI3LDE4LjU5IDE1LjcyLDE4LjkgMTUuMTksMTguNzZDMTQuNjUsMTguNjIgMTQuMzQsMTguMDcgMTQuNSwxNy41NEwxNS43OCwxMi43MUMxNS45MiwxMi4xNyAxNi40NywxMS44NiAxNywxMk0xNywxMFY5QTUsNSAwIDAsMCAxMiw0QzkuNSw0IDcuNDUsNS44MiA3LjA2LDguMTlDNi43Myw4LjA3IDYuMzcsOCA2LDhBMywzIDAgMCwwIDMsMTFDMywxMi4xMSAzLjYsMTMuMDggNC41LDEzLjZWMTMuNTlDNSwxMy44NyA1LjE0LDE0LjUgNC44NywxNC45NkM0LjU5LDE1LjQzIDQsMTUuNiAzLjUsMTUuMzJWMTUuMzNDMiwxNC40NyAxLDEyLjg1IDEsMTFBNSw1IDAgMCwxIDYsNkM3LDMuNjUgOS4zLDIgMTIsMkMxNS40MywyIDE4LjI0LDQuNjYgMTguNSw4LjAzTDE5LDhBNCw0IDAgMCwxIDIzLDEyQzIzLDEzLjUgMjIuMiwxNC43NyAyMSwxNS40NlYxNS40NkMyMC41LDE1LjczIDE5LjkxLDE1LjU3IDE5LjYzLDE1LjA5QzE5LjM2LDE0LjYxIDE5LjUsMTQgMjAsMTMuNzJWMTMuNzNDMjAuNiwxMy4zOSAyMSwxMi43NCAyMSwxMkEyLDIgMCAwLDAgMTksMTBIMTdaXCIgLz48L3N2Zz5cbi8vIFN1blxuLy8gPHN2ZyBjbGFzcyA9ICdtYWluLXRlbXAtc3ZnJyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT53ZWF0aGVyLXN1bm55PC90aXRsZT48cGF0aCBkPVwiTTEyLDdBNSw1IDAgMCwxIDE3LDEyQTUsNSAwIDAsMSAxMiwxN0E1LDUgMCAwLDEgNywxMkE1LDUgMCAwLDEgMTIsN00xMiw5QTMsMyAwIDAsMCA5LDEyQTMsMyAwIDAsMCAxMiwxNUEzLDMgMCAwLDAgMTUsMTJBMywzIDAgMCwwIDEyLDlNMTIsMkwxNC4zOSw1LjQyQzEzLjY1LDUuMTUgMTIuODQsNSAxMiw1QzExLjE2LDUgMTAuMzUsNS4xNSA5LjYxLDUuNDJMMTIsMk0zLjM0LDdMNy41LDYuNjVDNi45LDcuMTYgNi4zNiw3Ljc4IDUuOTQsOC41QzUuNSw5LjI0IDUuMjUsMTAgNS4xMSwxMC43OUwzLjM0LDdNMy4zNiwxN0w1LjEyLDEzLjIzQzUuMjYsMTQgNS41MywxNC43OCA1Ljk1LDE1LjVDNi4zNywxNi4yNCA2LjkxLDE2Ljg2IDcuNSwxNy4zN0wzLjM2LDE3TTIwLjY1LDdMMTguODgsMTAuNzlDMTguNzQsMTAgMTguNDcsOS4yMyAxOC4wNSw4LjVDMTcuNjMsNy43OCAxNy4xLDcuMTUgMTYuNSw2LjY0TDIwLjY1LDdNMjAuNjQsMTdMMTYuNSwxNy4zNkMxNy4wOSwxNi44NSAxNy42MiwxNi4yMiAxOC4wNCwxNS41QzE4LjQ2LDE0Ljc3IDE4LjczLDE0IDE4Ljg3LDEzLjIxTDIwLjY0LDE3TTEyLDIyTDkuNTksMTguNTZDMTAuMzMsMTguODMgMTEuMTQsMTkgMTIsMTlDMTIuODIsMTkgMTMuNjMsMTguODMgMTQuMzcsMTguNTZMMTIsMjJaXCIgLz48L3N2Zz4iLCJpbXBvcnQgeyByZW5kZXJET00sIHJhaW5TdW5TVkcgfSBmcm9tIFwiLi9lZGl0LWRvbVwiO1xuXG5sZXQgd2VhdGhlckluZm8gPSB7fTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGxvY2F0aW9uID0gaW5wdXQudmFsdWU7XG4gICAgZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pO1xuICAgIHJlbmRlckRPTSgpO1xufSlcblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyBmdW5jdGlvbihsb2NhdGlvbikge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lZGY2NWFjM2IzMmE0ODkzOGUwMjIxOTQyMjMyMDExJnE9JHtsb2NhdGlvbn0mZGF5cz0zYCwge21vZGU6ICdjb3JzJ30pO1xuICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKHdlYXRoZXIgPT4gd2VhdGhlckpTT04od2VhdGhlcikpO1xufVxuXG5nZXRXZWF0aGVyRGF0YSgpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnN0IG1haW5UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDMnKTtcbiAgICBtYWluVGVtcC5pbm5lckhUTUwgPSAnJztcbiAgICBtYWluVGVtcC5pbm5lckhUTUwgPSBcIkVycm9yXCI7XG59KTtcblxubGV0IHdlYXRoZXJKU09OID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgd2VhdGhlckluZm8ubG9jYXRpb24gPSByZXNwb25zZS5sb2NhdGlvbi5uYW1lO1xuICAgIHdlYXRoZXJJbmZvLmN1cnJlbnREYXRlID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF0ZTtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50TWluID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50TWF4ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50RlRlbXAgPSByZXNwb25zZS5jdXJyZW50LnRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50SHVtaWRpdHkgPSByZXNwb25zZS5jdXJyZW50Lmh1bWlkaXR5O1xuICAgIHdlYXRoZXJJbmZvLmN1cnJlbnRQcmVjaXAgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG4gICAgXG4gICAgd2VhdGhlckluZm8uc2Vjb25kRGF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRhdGU7XG4gICAgd2VhdGhlckluZm8uc2Vjb25kTWluID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby5zZWNvbmRNYXggPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mO1xuICAgIHdlYXRoZXJJbmZvLnNlY29uZFByZWNpcCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIHdlYXRoZXJJbmZvLnRoaXJkRGF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRhdGU7XG4gICAgd2VhdGhlckluZm8udGhpcmRNaW4gPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mO1xuICAgIHdlYXRoZXJJbmZvLnRoaXJkTWF4ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby50aGlyZFByZWNpcCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXJJbmZvKTtcbn1cblxuZ2V0V2VhdGhlckRhdGEoXCJsb25kb25cIik7XG5yZW5kZXJET00oKTtcblxuZXhwb3J0IHt3ZWF0aGVySW5mb307Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicmVuZGVyRE9NIiwibWFpblRlbXBTVkciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyYWluU3VuU1ZHIiwid2VhdGhlckluZm8iLCJjdXJyZW50UHJlY2lwIiwibWFpblRlbXAiLCJjdXJyZW50RlRlbXAiLCJsb2NhdGlvbiIsImN1cnJlbnRIdW1pZCIsImN1cnJlbnRIdW1pZGl0eSIsImRheU9uZVNWRyIsIm1heFRlbXBPbmUiLCJjdXJyZW50TWF4IiwibWluVGVtcE9uZSIsImN1cnJlbnRNaW4iLCJwcmVjaXBPbmUiLCJkYXRlT25lIiwiY3VycmVudERhdGUiLCJkYXlUd29TVkciLCJzZWNvbmRQcmVjaXAiLCJtYXhUZW1wVHdvIiwic2Vjb25kTWF4IiwibWluVGVtcFR3byIsInNlY29uZE1pbiIsInByZWNpcFR3byIsImRhdGVUd28iLCJzZWNvbmREYXRlIiwiZGF5VGhyZWVTVkciLCJ0aGlyZFByZWNpcCIsIm1heFRlbXBUaHJlZSIsInRoaXJkTWF4IiwibWluVGVtcFRocmVlIiwidGhpcmRNaW4iLCJwcmVjaXBUaHJlZSIsImRhdGVUaHJlZSIsInRoaXJkRGF0ZSIsInByZWNpcCIsIm5vZGUiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImdldFdlYXRoZXJEYXRhIiwiYXN5bmMiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwidGhlbiIsIndlYXRoZXIiLCJ3ZWF0aGVySlNPTiIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRhdGUiLCJkYXkiLCJtaW50ZW1wX2YiLCJtYXh0ZW1wX2YiLCJjdXJyZW50IiwidGVtcF9mIiwiaHVtaWRpdHkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiJdLCJzb3VyY2VSb290IjoiIn0=
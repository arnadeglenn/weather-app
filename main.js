(()=>{let e={};const a=document.querySelector("input");document.querySelector("button").addEventListener("click",(e=>{let c=a.value;t(c)}));const t=async function(e){(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=edf65ac3b32a48938e0221942232011&q=${e}&days=3`,{mode:"cors"})).json().then((e=>c(e)))};let c=function(a){console.log(a),e.location=a.location.name,e.currentDate=a.forecast.forecastday[0].date,e.currentMin=a.forecast.forecastday[0].day.mintemp_f,e.currentMax=a.forecast.forecastday[0].day.maxtemp_f,e.currentFTemp=a.current.temp_f,e.currentHumidity=a.current.humidity,e.currentPrecip=a.forecast.forecastday[0].day.daily_chance_of_rain,e.secondDate=a.forecast.forecastday[1].date,e.secondMin=a.forecast.forecastday[1].day.mintemp_f,e.secondMax=a.forecast.forecastday[1].day.maxtemp_f,e.secondPrecip=a.forecast.forecastday[1].day.daily_chance_of_rain,e.thirdDate=a.forecast.forecastday[2].date,e.thirdMin=a.forecast.forecastday[2].day.mintemp_f,e.thirdMax=a.forecast.forecastday[2].day.maxtemp_f,e.thirdPrecip=a.forecast.forecastday[2].day.daily_chance_of_rain,console.log(e)}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUFFQSxJQUFJQSxFQUFjLENBQUMsRUFDbkIsTUFBTUMsRUFBUUMsU0FBU0MsY0FBYyxTQUN0QkQsU0FBU0MsY0FBYyxVQUUvQkMsaUJBQWlCLFNBQVVDLElBQzlCLElBQUlDLEVBQVdMLEVBQU1NLE1BQ3JCQyxFQUFlRixFQUFTLElBRzVCLE1BQU1FLEVBQWlCQyxlQUFlSCxVQUNiSSxNQUFNLHFGQUFxRkosV0FBbUIsQ0FBQ0ssS0FBTSxVQUNqSUMsT0FBT0MsTUFBS0MsR0FBV0MsRUFBWUQsSUFDaEQsRUFFQSxJQUFJQyxFQUFjLFNBQVNDLEdBQ3ZCQyxRQUFRQyxJQUFJRixHQUNaaEIsRUFBWU0sU0FBV1UsRUFBU1YsU0FBU2EsS0FDekNuQixFQUFZb0IsWUFBY0osRUFBU0ssU0FBU0MsWUFBWSxHQUFHQyxLQUMzRHZCLEVBQVl3QixXQUFhUixFQUFTSyxTQUFTQyxZQUFZLEdBQUdHLElBQUlDLFVBQzlEMUIsRUFBWTJCLFdBQWFYLEVBQVNLLFNBQVNDLFlBQVksR0FBR0csSUFBSUcsVUFDOUQ1QixFQUFZNkIsYUFBZWIsRUFBU2MsUUFBUUMsT0FDNUMvQixFQUFZZ0MsZ0JBQWtCaEIsRUFBU2MsUUFBUUcsU0FDL0NqQyxFQUFZa0MsY0FBZ0JsQixFQUFTSyxTQUFTQyxZQUFZLEdBQUdHLElBQUlVLHFCQUVqRW5DLEVBQVlvQyxXQUFhcEIsRUFBU0ssU0FBU0MsWUFBWSxHQUFHQyxLQUMxRHZCLEVBQVlxQyxVQUFZckIsRUFBU0ssU0FBU0MsWUFBWSxHQUFHRyxJQUFJQyxVQUM3RDFCLEVBQVlzQyxVQUFZdEIsRUFBU0ssU0FBU0MsWUFBWSxHQUFHRyxJQUFJRyxVQUM3RDVCLEVBQVl1QyxhQUFldkIsRUFBU0ssU0FBU0MsWUFBWSxHQUFHRyxJQUFJVSxxQkFFaEVuQyxFQUFZd0MsVUFBWXhCLEVBQVNLLFNBQVNDLFlBQVksR0FBR0MsS0FDekR2QixFQUFZeUMsU0FBV3pCLEVBQVNLLFNBQVNDLFlBQVksR0FBR0csSUFBSUMsVUFDNUQxQixFQUFZMEMsU0FBVzFCLEVBQVNLLFNBQVNDLFlBQVksR0FBR0csSUFBSUcsVUFDNUQ1QixFQUFZMkMsWUFBYzNCLEVBQVNLLFNBQVNDLFlBQVksR0FBR0csSUFBSVUscUJBRS9EbEIsUUFBUUMsSUFBSWxCLEVBQ2hCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PWVkZjY1YWMzYjMyYTQ4OTM4ZTAyMjE5NDIyMzIwMTEmcT1sb25kb25cblxubGV0IHdlYXRoZXJJbmZvID0ge307XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBsZXQgbG9jYXRpb24gPSBpbnB1dC52YWx1ZTtcbiAgICBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbik7XG59KVxuXG5jb25zdCBnZXRXZWF0aGVyRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKGxvY2F0aW9uKSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWVkZjY1YWMzYjMyYTQ4OTM4ZTAyMjE5NDIyMzIwMTEmcT0ke2xvY2F0aW9ufSZkYXlzPTNgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgcmVzcG9uc2UuanNvbigpLnRoZW4od2VhdGhlciA9PiB3ZWF0aGVySlNPTih3ZWF0aGVyKSk7XG59XG5cbmxldCB3ZWF0aGVySlNPTiA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIHdlYXRoZXJJbmZvLmxvY2F0aW9uID0gcmVzcG9uc2UubG9jYXRpb24ubmFtZTtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50RGF0ZSA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGU7XG4gICAgd2VhdGhlckluZm8uY3VycmVudE1pbiA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Y7XG4gICAgd2VhdGhlckluZm8uY3VycmVudE1heCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Y7XG4gICAgd2VhdGhlckluZm8uY3VycmVudEZUZW1wID0gcmVzcG9uc2UuY3VycmVudC50ZW1wX2Y7XG4gICAgd2VhdGhlckluZm8uY3VycmVudEh1bWlkaXR5ID0gcmVzcG9uc2UuY3VycmVudC5odW1pZGl0eTtcbiAgICB3ZWF0aGVySW5mby5jdXJyZW50UHJlY2lwID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIFxuICAgIHdlYXRoZXJJbmZvLnNlY29uZERhdGUgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXRlO1xuICAgIHdlYXRoZXJJbmZvLnNlY29uZE1pbiA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2Y7XG4gICAgd2VhdGhlckluZm8uc2Vjb25kTWF4ID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby5zZWNvbmRQcmVjaXAgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICB3ZWF0aGVySW5mby50aGlyZERhdGUgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlO1xuICAgIHdlYXRoZXJJbmZvLnRoaXJkTWluID0gcmVzcG9uc2UuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZjtcbiAgICB3ZWF0aGVySW5mby50aGlyZE1heCA9IHJlc3BvbnNlLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2Y7XG4gICAgd2VhdGhlckluZm8udGhpcmRQcmVjaXAgPSByZXNwb25zZS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW47XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVySW5mbyk7XG59Il0sIm5hbWVzIjpbIndlYXRoZXJJbmZvIiwiaW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImxvY2F0aW9uIiwidmFsdWUiLCJnZXRXZWF0aGVyRGF0YSIsImFzeW5jIiwiZmV0Y2giLCJtb2RlIiwianNvbiIsInRoZW4iLCJ3ZWF0aGVyIiwid2VhdGhlckpTT04iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY3VycmVudERhdGUiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiZGF0ZSIsImN1cnJlbnRNaW4iLCJkYXkiLCJtaW50ZW1wX2YiLCJjdXJyZW50TWF4IiwibWF4dGVtcF9mIiwiY3VycmVudEZUZW1wIiwiY3VycmVudCIsInRlbXBfZiIsImN1cnJlbnRIdW1pZGl0eSIsImh1bWlkaXR5IiwiY3VycmVudFByZWNpcCIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwic2Vjb25kRGF0ZSIsInNlY29uZE1pbiIsInNlY29uZE1heCIsInNlY29uZFByZWNpcCIsInRoaXJkRGF0ZSIsInRoaXJkTWluIiwidGhpcmRNYXgiLCJ0aGlyZFByZWNpcCJdLCJzb3VyY2VSb290IjoiIn0=
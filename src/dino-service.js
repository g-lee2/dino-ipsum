export default class DinoService {  
  static getDinoName() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = 'https://dinoipsum.com/api/?format=html&words=25&paragraphs=1';
      request.addEventListener("loadend", function() {
        if (this.status === 200) {
          resolve([this.response]);
        } else {
          reject([this, this.response]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}

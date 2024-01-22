//cobject compostition
//meninggalkan sifat inheritance untuk object kemampuan kompleks

class MmorpgChar {

  constructor(nickname){
    this.nickname = nickname;
  }



  skill1(){
    return{
      shootingFire : () => {
        console.log(`${this.nickname} use shootingFire`);
      }
    };
  }

  skill2(){
    return{
      gathlingGun : () => {
        console.log(`${this.nickname} use gathlingGun`);
      }
    };
  }

  skill3(){
    return{
      rainMeteor : () => {
        console.log(`${this.nickname} use rainMeteor`);
      }
    };
  }

  skill4(){
    return{
      iceBarier : () => {
        console.log(`${this.nickname} use iceBarier`);
      }
    };
  }

  createObjectfullskill() {
    return Object.assign(this, this.skill1(), this.skill2(), this.skill3(), this.skill4());
  }


}

const char = new MmorpgChar("herdo");
char.createObjectfullskill();


//character menggunakan skill
char.iceBarier();
//char.rainMeteor();

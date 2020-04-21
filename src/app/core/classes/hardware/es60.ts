import { Container, Texture, Sprite } from 'pixi.js';
import { DriveTray } from './drivetray';
import { Chassis } from './chassis';
import { ChassisView, Position } from './chassis-view';

export class ES60 extends Chassis {

  constructor(){
    super();
    this.model = "es60";

    this.front = new ChassisView();
    this.front.container = new PIXI.Container();
    this.front.chassisPath = "assets/images/hardware/es60/es60_960w.png";
    this.front.driveTrayBackgroundPath = "assets/images/hardware/es60/es60_960w_drivetray_bg.png" ;
    this.front.driveTrayHandlePath = "assets/images/hardware/es60/es60_960w_drivetray_handle.png";
    this.front.totalDriveTrays = 60;
    this.front.rows = 12;
    this.front.columns = 5;
    this.generatePerspectiveOffset();
  }

  /*generatePosition(displayObject, index): Position{
    let gapX = 16;
    let gapY = 6;
    let mod = index % this.front.rows;

    let nextPositionX = Math.floor(index / this.front.rows) * (displayObject.width + gapX);
    let nextPositionY = mod * (displayObject.height + gapY);

    return {x: nextPositionX, y: nextPositionY }
  }*/

  generatePerspectiveOffset(){
    this.front.driveTrays.transform.position.x = 32;
    this.front.driveTrays.transform.position.y = 32;
  }

}

import {CropModel, CropAttrs} from "./cropModel";

class Crop extends CropModel {
    /*
        the x and y coordinates indicate the position that the crop is at 
        in the crop planner.
    */
    xcoord = -1;
    ycoord = -1;
    constructor(name, description, attributes, xcoord, ycoord) {
        super(name, description, attributes);
        this.xcoord = xcoord;
        this.ycoord = ycoord;
    }

    // returns a boolean value on whether the temperature is appropriate for this crop
    check_temperature(temperature) {
        return (temperature <= this.attributes.higherTemperatureLimit) && (temperature >= this.attributes.lowerTemperatureLimit);
    }

    // returns a boolean value on whether the amount of irrigation is appropriate for this crop
    check_irrigation(irrigation) {
        return (irrigation <= this.attributes.higherIrrigationLimit) && (irrigation >= this.attributes.lowerIrrigationLimit);
    }

    // returns a boolean value on whether the sunlight intensity is appropriate for this crop
    check_sunlight(hour) {
        return (hour >= this.attributes.lowerSunLightHour);
    }

    get_name() {
        return this.name;
    }
}

export {Crop};
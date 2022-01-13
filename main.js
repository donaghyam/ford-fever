// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

const chassis = createChassis()

const addBody = (chassisObject) => {
	// Use dot notation to add a new property
	chassisObject.body = "Fever"

	// Return the chassis that now has a body property on it
	return chassisObject
}

const chassisWithBody = addBody(chassis)

const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}

const chassisWithWheels = addWheels(chassisWithBody)

const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}

const chassisWithEngine = addEngine(chassisWithWheels)

const addSteeringWheels = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}

const chassisWithSteering = addSteeringWheels(chassisWithEngine)

const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}

const fordFever = addDriveTrain(chassisWithSteering)

createChassis()

console.log(fordFever)



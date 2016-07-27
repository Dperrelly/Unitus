#pragma strict

var destination : CameraWaypointScript;
var speed : float = 100;
private var destinationPosition : Vector2;

function reachedWaypoint(){
	if(destination.nextWaypoint){
		destination = destination.nextWaypoint;
		destinationPosition = destination.gameObject.transform.position;
	}

	if(destination.speed){
		speed = destination.speed;
	}
}

function Start () {
	if(destination.speed){
		speed = destination.speed;
	}

	if(destination) destinationPosition = destination.gameObject.transform.position;
}

function Update () {
	var step = speed * Time.deltaTime;

	//move towards destination
	transform.position = Vector2.MoveTowards(transform.position, destinationPosition, step);
	transform.position.z = -10;

	if(transform.position.x == destinationPosition.x && transform.position.y == destinationPosition.y){
		reachedWaypoint();
	}
}
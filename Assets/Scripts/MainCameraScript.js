#pragma strict

var destination : CameraWaypointScript;
var speed : float = 100;
var ship : Transform;
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

	//get vector to move
	var translation : Vector2 = Vector2.MoveTowards(transform.position, destinationPosition, step) - transform.position;

	//move towards destination
	transform.position += translation;
	transform.position.z = -10;


	ship.position += translation;

	if(transform.position.x == destinationPosition.x && transform.position.y == destinationPosition.y){
		reachedWaypoint();
	}
}
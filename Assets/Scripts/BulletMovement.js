#pragma strict

var speed : float = 2000;

function Start () {
    GetComponent.<Rigidbody2D>().AddForce(Vector2.right*speed);
}

function Update () {

}
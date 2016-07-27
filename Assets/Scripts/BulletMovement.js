#pragma strict

var speed : float = 2000;

function Start () {
    GetComponent.<Rigidbody2D>().AddForce(transform.right*speed);
}

function Update () {

}
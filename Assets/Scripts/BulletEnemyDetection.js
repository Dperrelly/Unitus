﻿#pragma strict

var power : int = 3;

function OnTriggerEnter2D(other : Collider2D) {
    if(other.gameObject.tag != "Player" && other.gameObject.tag != "Nono" ){
        var otherScript = other.gameObject.GetComponent.<EnemyHealth>();
        otherScript.takeDamage(power);
        Destroy(gameObject);
    }
}
﻿#pragma strict

function OnTriggerEnter2D(other : Collider2D) {
    if(other.tag == "Player"){
        Destroy(gameObject);
    }
}
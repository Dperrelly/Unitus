#pragma strict

import UnityEngine.SceneManagement;

public function die(){
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}

function OnTriggerEnter2D(other : Collider2D) {
    if(other.gameObject.tag == "DestroysShip"){
        die();
    }
}
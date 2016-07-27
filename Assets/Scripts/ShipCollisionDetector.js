#pragma strict

import UnityEngine.SceneManagement;

public function die(){
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}

function OnCollisionEnter2D(col : Collision2D) {
    if(col.gameObject.tag == "Enemy"){
        die();
    }
}
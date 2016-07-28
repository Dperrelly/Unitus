#pragma strict

public var paused : boolean = false;
var canvas : Canvas;

public function unpause(){
	canvas.enabled = false;
    paused = false;
    Time.timeScale = 1;
}

public function pause(){
	canvas.enabled = true;
    paused = true;
    Time.timeScale = 0;
}

public function quit(){
	Application.Quit();
}

function Update () {
	if(Input.GetButtonDown("Pause")){
        if(!paused){
        	pause();
        } else
        if(paused){
        	unpause();
        }
    }
}
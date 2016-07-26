#pragma strict

var speed : float = 2;

public function Update() {
    var xTranslation = speed;
    xTranslation *= Time.deltaTime;
    transform.Translate (-xTranslation, 0, 0);
}


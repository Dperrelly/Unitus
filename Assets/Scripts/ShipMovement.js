#pragma strict

var speed : float = 10;

public function Update() {

    // Get the horizontal and vertical axis.
    // The value is in the range -1 to 1
    var yTranslation : float = Input.GetAxis ("Vertical") * speed;
    var xTranslation : float = Input.GetAxis ("Horizontal") * speed;
		
    // Make it move 10 meters per second instead of 10 meters per frame...
    yTranslation *= Time.deltaTime;
    xTranslation *= Time.deltaTime;
		
    // Translate
    transform.Translate (yTranslation, -xTranslation, 0);
}
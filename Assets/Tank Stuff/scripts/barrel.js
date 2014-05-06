// Performs a mouse look.

var horizontalSpeed : float = 2.0;
var verticalSpeed : float = 2.0;
function Update () {
    // Get the mouse delta. This is not in the range -1...1
    //var h : float = horizontalSpeed * Input.GetAxis ("Mouse X");
    var v : float = verticalSpeed * Input.GetAxis ("Mouse Y");
    transform.Rotate (-v, 0 , 0);
}


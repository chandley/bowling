function Pin(){
  this.standing = true;
}

Pin.prototype.isStanding = function() {
	return(this.standing);
};

Pin.prototype.knockDown = function() {
  this.standing = false;
};
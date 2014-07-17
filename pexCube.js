var sys = pex.sys;
var glu = pex.glu;
var Color = pex.color.Color;
var gen = pex.gen;
var materials = pex.materials;
var geom = pex.geom;

sys.Window.create({
    settings: {
        width:700,
        height:700,
    },
    init: function() {

        var cube = new gen.Cube();
        var cubeMat = new materials.ShowNormals();
        var cubeMesh = new glu.Mesh(cube, cubeMat);
        this.mesh = cubeMesh;
        this.camera = new glu.PerspectiveCamera(40, this.width/this.height);
        var gl = this.gl;
        gl.enable(gl.DEPTH_TEST);

        document.addEventListener('headtrackrStatus', 
            function (event) {                        
                console.log(event.status);
            }
        );

        var that = this;
        document.addEventListener('headtrackingEvent', 
            function (event) {                        
                that.camera.position.x = -event.x/2;
                that.camera.position.y = -event.y/2 + 4;
                that.camera.updateMatrices();
            }
        );

    },

   draw: function() {
        glu.clearColorAndDepth(Color.Black);
        this.mesh.draw(this.camera);
    }
});

const deathLaserCharge = new Effect(166, e => {
    Draw.color(Color.valueOf("FF4444"));
    Lines.stroke(e.fin() * 6);
    Lines.circle(e.x, e.y, 4 + e.fout() * 100);

    Fill.circle(e.x, e.y, e.fin() * 30);

    Angles.randLenVectors(e.id, 30, 50 * e.fout(), (x, y) => {
        Fill.circle(e.x+x, e.y+y, e.fin() * 20);
    });


    Fill.circle(e.x, e.y, e.fin() * 20);
});
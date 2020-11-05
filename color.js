var set = {
    LinkColor:function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i<alist.length){
        alist[i].style.color=color;
        i = i + 1;
    }
    },
    BodyBackgroundColor:function (color) {
        document.querySelector('body').style.backgroundColor=color
    },
    BodyColor:function (color) {
        document.querySelector('body').style.color=color
    }
}
function nightday(self) {
if(self.value === 'night') {
    set.BodyBackgroundColor('black');
    set.BodyColor('white');
    self.value = 'day';
    set.LinkColor('powderblue');
    
} else {
    set.BodyBackgroundColor('white');
    set.BodyColor('black');
    self.value = 'night';
    set.LinkColor('blue');
}
}
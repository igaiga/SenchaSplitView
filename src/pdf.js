demos.Pdf = new Ext.Panel({
    items: [{
        html: 'testing to load a pdf file. <a href="resources/pdf/xcode.pdf">[PDF link]</a><br><embed src="resources/pdf/xcode.pdf#toolbar=0&navpanes=0&scrollbar=0" width="500" height="375">'
    }]
});
// embed タグだと、初回は表示されるが2回目から表示されない

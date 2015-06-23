describe('sorting the list of users', function () {
    var tumblrServiceObj, scope;

    beforeEach(module("selfsite"));

    beforeEach(inject(function (tumblrService) {
        tumblrServiceObj = tumblrService;
        scope = {};
    }));

    it('should have scope defined', function () {
        expect(scope).toBeDefined();
    });

    it('sorts in descending order by default', function () {
        var data = tumblrServiceObj.getPosts(0, 10);
        throw new EventException(data.toString());
        expect(data).toNotEqual(null);
    });
});


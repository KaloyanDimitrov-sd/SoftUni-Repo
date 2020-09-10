let solution = (function () {
    let postData = {};

    function call(obj, arg) {
        if (Object.keys(postData).length === 0) {
            postData = obj;
        }

        if (arg === "upvote") {
            postData.upvotes++;
        }

        if (arg === "downvote") {
            postData.downvotes++;
        }

        if (arg === "score") {
            let rating;
            let up = upReport = postData.upvotes;
            let down = downReport = postData.downvotes;
            let totalVotes = up + down;
            let score = up - down;
            if (totalVotes > 50) {
                if (up >= down) {
                    upReport += Math.ceil(up * 0.25);
                    downReport += Math.ceil(up * 0.25);
                } else {
                    upReport += Math.ceil(down * 0.25);
                    downReport += Math.ceil(down * 0.25);
                }
            }

            if (totalVotes < 10) {
                rating = "new";
            } else if (up > totalVotes * 66 / 100) {
                rating = "hot";
            } else if (up >= down && (up > 100 || down > 100)) {
                rating = "controversial";
            } else if (down > up) {
                rating= "unpopular";
            } else {
                rating = "new";
            }

            return [upReport, downReport, score, rating];

        }
    }

    return {
        call: call
    }
})()
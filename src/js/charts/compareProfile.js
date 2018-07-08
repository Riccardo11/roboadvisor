class CompareProfile {

    constructor(bond, equity, cash, hy) {
        this.bond = bond;
        this.equity = equity;
        this.cash = cash;
        this.hy = hy;
    }

    compare1() {
        const diffBond = Math.abs(this.bond - 60);
        const diffEquity =  Math.abs(this.equity - 0);
        const diffCash =  Math.abs(this.cash - 40);
        const diffHY =  Math.abs(this.hy - 0);

        return diffBond + diffEquity + diffCash + diffHY;
    }

    compare2() {
        const diffBond = Math.abs(this.bond - 60);
        const diffEquity =  Math.abs(this.equity - 0);
        const diffCash =  Math.abs(this.cash - 20);
        const diffHY =  Math.abs(this.hy - 20);

        return diffBond + diffEquity + diffCash + diffHY;
    }

    compare3() {
        const diffBond = Math.abs(this.bond - 50);
        const diffEquity =  Math.abs(this.equity - 15);
        const diffCash =  Math.abs(this.cash - 15);
        const diffHY =  Math.abs(this.hy - 20);

        return diffBond + diffEquity + diffCash + diffHY;
    }

    compare4() {
        const diffBond = Math.abs(this.bond - 50);
        const diffEquity =  Math.abs(this.equity - 20);
        const diffCash =  Math.abs(this.cash - 0);
        const diffHY =  Math.abs(this.hy - 30);

        return diffBond + diffEquity + diffCash + diffHY;
    }

    compare5() {
        const diffBond = Math.abs(this.bond - 40);
        const diffEquity =  Math.abs(this.equity - 30);
        const diffCash =  Math.abs(this.cash - 0);
        const diffHY =  Math.abs(this.hy - 30);

        return diffBond + diffEquity + diffCash + diffHY;
    }

    getMostSimilarProfile() {
        const comparisons = [
            this.compare1(),
            this.compare2(),
            this.compare3(),
            this.compare4(),
            this.compare5(),
        ];
        return comparisons.indexOf(Math.min.apply(Math,comparisons)) + 1;
    }

    getDifferenceFromProfile(profile) {
        let diffBond;
        let diffEquity;
        let diffCash;
        let diffHY;
        switch(profile) {
            case 1:
                diffBond = 60 - this.bond;
                diffEquity = 0 - this.equity;
                diffCash = 40 - this.cash;
                diffHY = 0 -this.hy;
                return [diffBond, diffEquity, diffCash, diffHY];
            case 2:
                diffBond = 60 - this.bond;
                diffEquity = 0 - this.equity;
                diffCash = 20 - this.cash;
                diffHY = 20 -this.hy;
                return [diffBond, diffEquity, diffCash, diffHY];
            case 3:
                diffBond = 50 - this.bond;
                diffEquity = 15 - this.equity;
                diffCash = 15 - this.cash;
                diffHY = 20 -this.hy;
                return [diffBond, diffEquity, diffCash, diffHY];
            case 4:
                diffBond = 50 - this.bond;
                diffEquity = 20 - this.equity;
                diffCash = 0 - this.cash;
                diffHY = 30 -this.hy;
                return [diffBond, diffEquity, diffCash, diffHY];
            case 5:
                diffBond = 40 - this.bond;
                diffEquity = 30 - this.equity;
                diffCash = 0 - this.cash;
                diffHY = 30 -this.hy;
                return [diffBond, diffEquity, diffCash, diffHY];
            default:
                alert("error in comparing profiles");
        }
    }
}

export default CompareProfile
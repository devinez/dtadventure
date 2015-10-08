export default function HomeController(StepService) {

    StepService.getSteps()
        .then(function (steps) {
            this.steps = steps
        }.bind(this))

    this.sortBy = function (predicate) {
        if (predicate === this.predicate) {
            this.reverse = !this.reverse;
        } else {
            this.reverse = false;
        }
        this.predicate = predicate;
    }
}

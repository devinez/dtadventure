export default function PlayStepController($routeParams, StepService, UserService) {

    StepService.getStep($routeParams.id)
        .then(function (step) {
            this.step = step
            console.log("play")
        }.bind(this))

    this.user = UserService

    this.selectAction = function (action) {
        StepService.action(action, this.user)
    }


}

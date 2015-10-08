export default function EditStepController(StepService, $routeParams, $locate) {

	StepService.getStep($routeParams.id)
        .then(function (step) {
            this.step = step
			console.log("edit")
        }.bind(this))

	this.save = function () {
		if (this.stepForm.$invalid) {
			alert("erreur")
			return
		}
		StepService.saveStep(this.step)
		.then(function() {
			$locate.path('/')
		})

	}

	this.delete = function (step) {
		StepService.deleteStep(this.step.id)
		.then(function() {
			$locate.path('/')
		})
	}
}
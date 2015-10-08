export default function StepService ($http, ActionService) {

    function handleResponse(response) {
        return response.data
    }
    var url = 'http://localhost:3000/steps';
    return {
        
        getSteps: function () {
            return $http.get(url)
            .then(handleResponse)
        },

        // createStep: function (step) {
        //     return $http.post('http://localhost:3000/steps', step)
        //     .then(handleResponse)
        // },

        getStep: function (id) {
            return $http.get(url + '/' + id)
            .then(handleResponse)
        },

        saveStep: function(step) {
            return $http.put(url + '/' + step.id )
            .then(handleResponse)
        },
        
        deleteStep: function(step) {
            return $http.delete()
            .then(handleResponse)
        }, 
        
        action: function (action, user) {
            return ActionService[action.type](user, action.params)
        }
    }
}

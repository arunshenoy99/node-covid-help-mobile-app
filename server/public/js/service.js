$(document).ready(function () {
    $('.spinner-wrapper').fadeOut(500)
    const service = window.location.pathname.split('/')[1]
    const url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/${service}`
    $('#service-form').submit(async function (e) {
        e.preventDefault()
        $('#service-form-submit').attr('disabled', true)
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: $('#service-form').serialize()
        })
        if (response.status === 201) {
            $('.invalid-feedback').html('')
            $('#successModal').modal('show')
        }
        else if (response.status === 401) {
            window.location.href = url
        } 
        else {
            $('.invalid-feedback').html('')
            const data = await response.json()
            if (data.duplicate) {
                $('#Phone-feedback').html(`We already have a phone number for this contact in our data. Please provide an alternate number.`)
                $(".form-container").animate({ scrollTop: "0" });
                $('#errorModal').modal('show')
                return $('#service-form-submit').attr('disabled', false)
            }
            const errors = Object.keys(data.errors)
            errors.forEach((error) => {
                $(`[id='${error}-feedback']`).html(data.errors[error].message)
            })
            $(".form-container").animate({ scrollTop: "0" });
            $('#errorModal').modal('show')
        }
        $('#service-form-submit').attr('disabled', false)
    })
})
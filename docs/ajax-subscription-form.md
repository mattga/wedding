### Integrating AJAX into Mailchimp and Campaign Monitor

#### HTML

```
var Subscription = {
  // DOM refs
  $subscriptionForm: null,
  $subscriptionMsg: null,

  // Class name
  hideClass: null,

  handleAjax: function handleAjax() {
    var self = this;

    $.ajax({
      url: self.$subscriptionForm.attr('action'),
      type: self.$subscriptionForm.attr('method'),
      data: self.$subscriptionForm.serialize(),
      cache       : false,
      dataType    : 'json',
      contentType: "application/json; charset=utf-8",
      success: function() {
        self.$subscriptionMsg.removeClass(self.hideClass);
      },
      error: function(err) {
        console.log("Could not connect to the registration server. Please try again later.");
      }
    })
  },

  init: function(opts) {
    this.$subscriptionForm = $(opts.subscriptionForm);
    this.$subscriptionMsg = $(opts.subscriptionMsg);
    this.hideClass = opts.hideClass;

    this.$subscriptionForm.submit(function(evt) {
      evt.preventDefault();
      this.handleAjax();
    }.bind(this));
  }
};
```

<br>

#### Requirement
- Form
- Confirmation Message
- A class that hide the Confirmation Message


<br>

#### Initialization

```
 var NEW_SUBSCRIPTION_OBJECT = Object.create(Subscription);
 NEW_SUBSCRIPTION_OBJECT.init({
   subscriptionForm: MY_FORM,
   subscriptionMsg: MY_MESSAGE,
   hideClass: HIDDEN_CLASS
 });
```

<br>

#### Integration with Mailchimp

##### Modify Mailchimp URL

Original URL

>//copperside.us10.list-manage.com/subscribe/post?u=76d9304820526869b66b8bfaa&amp;id=5c1a86c49a

Modified URL

>//copperside.us10.list-manage.com/subscribe/post`-json`?u=76d9304820526869b66b8bfaa&amp;id=5c1a86c49a`&c=?`

<br>

##### Modify Form Method

Change Form's `method="POST"` to `method="GET"`


<br>


#### Integration with Campaign Monitor

##### Modify AJAX

Inside `handleAjax` method, change `dataType` value from `json` to `jsonp`


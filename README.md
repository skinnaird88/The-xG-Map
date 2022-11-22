# The xG Map
Expected goals (xG) is a contemporary metric in football statistics. It is used to measure the likelihood that any given shot at goal in a football match will result in a goal. xG illustrates for us the quality and quantity of chances that a team, or individual player, has created in a single match or series of multiple matches.

The xG map is designed to give a user, such as a player scout, an interactive football pitch graphic. This UI allows them to select certain areas of the pitch from which to record shots and goals. They will also be able to input the locations of opposition players, which reduces the xG value of a shot.

The user can also input the position of opposition defenders on the pitch. The presence of defenders reduces the xG value of a shot.
As goals and shots are recorded, the xG value and goals count increases on the goal and shot tracker. The tracker allows the user to clear shot data in case of any errors without affecting the player report form. When the submit form on the tracker is clicked, the current data on the tracker is passed to the form and the tracker values are reset.

The form allows selection of a player and opposition team from the database. Once the completed form is submitted, it is then rendered on the reports page.
The user is also able to create new players via the add player link in the nav bar.

<img src="/public/pitch-screenshot.png" alt="pitch" title="pitch">
<img src="/public/pitch-button-and-form.png" alt="button and form" title="form">
<img src="/public/reports.png" alt="reports" title="reports">
<img src="/public/add-player.png" alt="add player" title="add player">
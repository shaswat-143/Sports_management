import React from "react";
import "./Event.css";

const Event = () => {
  return (
    <div>
 


<body>
	<section>
		<div className="leftBox">
			<div className="content">
				<h1>
					Sports and Events
				</h1>
				
<p>
					There are pieces of evidence that 
					prove that human is playing sports since ancient times.
				</p>

			</div>
		</div>

		<div className="events">
			<ul>
				<li>
					<div className="time">
						<h2>
							15 <br/><span>November</span>
						</h2>
					</div>
					<div className="details">
						<h3>
							Inter Branch Football Tournament
						</h3>
						
<p>
							There is "Goal Post" constructed at the both ends of a big ground
							where,
							a big net with that goalpost.
						</p>


						<a href="/#">View Details</a>
					</div>
					{/* <div style="clear: both;"></div> */}
				</li>

				<li>
					<div className="time">
						<h2>
							13 <br/><span>October</span>
						</h2>
					</div>
					<div className="details">
						<h3>
							Inter Branch Cricket Tournament
						</h3>
						
<p>
							The aim of the two teams is to restrict the opponet to fewer runs
							while bowling,
							and make maximum runs while batting.
						</p>

						<a href="/#">View Details</a>
					</div>
					{/* <div style="clear:both;"></div> */}
				</li>

				<li>
					<div className="time">
						<h2>
							20 <br/><span>August</span>
						</h2>
					</div>
					<div className="details">
						<h3>
							Inter Branch Basketball Tournament
						</h3>
						
<p>
							The Players must dribble the ball and
							put the ball through,
							net rings to score.
						</p>


						<a href="/#">View Details</a>
					</div>
					{/* <div style="clear:both;"></div> */}
				</li>
			</ul>
		</div>
	</section>
</body>


    </div>
  );
};

export default Event;

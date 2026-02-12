---
{"obsidian-note-status":[],"dg-publish":true,"tags":["teaching","physics","rotationalmechanics"],"permalink":"/charleshoots-net/ii-teaching/physics/rotational-mechanics/angular-momentum/","dgPassFrontmatter":true,"noteIcon":"1","created":"2025-09-14T21:09:34.000-10:00","updated":"2026-02-11T12:30:00.989-10:00"}
---


>[!summary]
Angular momentum is used to describe how much force an object has when rotating. This type of momentum is not always conserved, nor is it an intrinsic property
> 
An object can be moving linearly but still have angular momentum 
>
>
**Key equations:**
> 
Angular momentum:
$\vec{L}  = \vec{r} \times \vec{p}$
>
Special case where a body is rotating symmetrically:
$\vec{L} = I\omega$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Angular momentum is used to describe how much "hard" it is to give an object rotation. It's similar to [linear momentum](../Dynamics/Linear%20Momentum.md) in that it **can be** a conversed quantity, but is **not an intrinsic property, nor is it always conserved.** It depends on your reference frame and is only conserved if the [net torque](Torque.md) is zero. 

>[!warning] Angular momentum does not **ALWAYS** mean spinning in a circle
Most situations of angular momentum involve an object spinning in a circle. You can also have angular momentum if an object has [linear momentum](../Dynamics/Linear%20Momentum.md) and has a sideways component (not moving straight)

Mathematically, angular momentum is the cross product between [linear momentum](../Dynamics/Linear%20Momentum.md) and the r displacement [[Scalar & Vectors\|vector]]. The r [displacement](../Kinematics/Displacement.md) vector is the reference point, which can be arbitrarily chosen. Meaning certain reference frames will not have angular momentum.

$$\vec{L}  = \vec{r} \times \vec{p}$$

> [!note] Angular Momentum Diagram 
![[ang_4.png\|ang_4.png]]
[^2]
Example of angular momentum of a point like mass

# Special Case For Rotating Rigid Bodies
>[!warning] Assumption
For this special case, assume the following:
> -  The object is rotating symmetrically. 
> - The origin at in the middle of the rotating object
> - The rotation can be described from [rotational kinematics](Rotational%20Kinematics.md) $v = \omega \times r$ 
> 
> Use the diagram below as a visual aid of a rotating body rotating symmetrically. 
![[am_1.png\|am_1.png]]

$$\begin{array}{c}
L = r \times p \\ 
L = r \times (mv) \\ 
L = mr \times (\omega \times r)  \\ 
L = mr^2 \omega \\ 
L = I\omega \\ 
\end{array}$$

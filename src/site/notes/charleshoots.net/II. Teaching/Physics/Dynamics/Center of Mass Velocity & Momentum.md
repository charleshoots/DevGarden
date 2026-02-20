---
{"dg-publish":true,"permalink":"/../../II. Teaching/Physics/Dynamics/Center of Mass Velocity & Momentum/","tags":["teaching","physics","dynamics"],"noteIcon":"1","created":"2026-02-11T19:13:57.415-10:00","updated":"2026-02-19T14:29:07.264-10:00"}
---



> [!summary]
The center of mass in terms of velocity is the velocity of the point where all the mass of a rigid body or collection of particles lies.
> 
**Key Equations:**
> 
Velocity center of mass:
$v_{cm}=\frac{\sum_{i} m_{i} \vec{v_{i}}}{\sum_{i}m_{i}}$
> 
Velocity center of mass in terms of momentum:
$v_{cm}=\frac{p_{tot}}{M}$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
The center of mass in terms of velocity describes the velocity as if all the mass were concentrated at that point. If a rigid body or system of particles has a velocity, then it also has [linear momentum](Linear%20Momentum). By definition of [velocity](../Kinematics/Velocity) is the [[Instantaneous\|instantaneous change]] of the [center of mass position](Center%20of%20Mass%20Displacement). 

## Derivation 
> [!warning] Assumptions
To derive the center of mass velocity and momentum, assume the following:
> - [Velocity](../Kinematics/Velocity) is the [[Derivative\|derivative]] of [displacement](../Kinematics/Displacement) 
> - The [center of mass position](Center%20of%20Mass%20Displacement) is defined as $\vec{r_{cm}} = \frac{\displaystyle \sum_{i}m_{i}\vec{r_{i}}}{\displaystyle \sum_{i} m_{i}}$
> - [Linear momentum](Linear%20Momentum) is defined as $\vec{p} =m\vec{v}$

$$
\begin{align*}
v_{cm}&= \frac{dr_{cm}}{dt} \\
&=  \frac{\sum_{i} \overbrace{m_{i} \vec{v_{i}}}^{p_{i}}}{\sum_{i}m_{i}} \\
&= \frac{\sum_{i} p_{i}}{\sum_{i}m_{i}} \\
&= \frac{p_{tot}}{M}
\end{align*}
$$

> [!note]
In the final line of the derivation we let $\displaystyle\sum_{i}p_{i}=p_{tot}$ and $\displaystyle\sum_{i}m_{i}=M$

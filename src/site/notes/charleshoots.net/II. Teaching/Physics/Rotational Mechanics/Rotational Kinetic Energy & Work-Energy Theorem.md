---
{"dg-publish":true,"tags":["teaching","physics","rotationalmechanics"],"dg-path":"II. Teaching/Physics/Rotational Mechanics/Rotational Kinetic Energy & Work-Energy Theorem.md","permalink":"/ii-teaching/physics/rotational-mechanics/rotational-kinetic-energy-and-work-energy-theorem/","dgPassFrontmatter":true,"noteIcon":"1","created":"2025-09-14T21:09:34.000-10:00","updated":"2026-02-11T12:30:01.117-10:00"}
---



> [!summary]
Rotational kinetic energy is the energy of rotating bodies
> 
**Key Equations:**
> 
Rotational kinetic energy
$K = \frac{1}{2}\omega^2 I_{0}$
> 
Rotational work-kinetic energy theorem:
$W =\Delta K$

>[!info]+ Read Time
**⏱ 3 mins**

# Definition 
Rotational kinetic energy is the [kinetic energy](../Energy%20&%20Work/Kinetic%20Potential%20Energy%20&%20Work-Energy%20Theorem.md) of rotating objects. It's the [rotational work done](Rotational%20Work.md) on an object to keep it rotating or to cause rotation. 

## Derivation 
> [!warning] Assumptions
To derive rotational kinetic energy, take the example to find the rotational kinetic energy of the rigid body below.
> 
This can be found by taking the sum of very small mass elements and their respective displacement element from an axis.
![[rot_1.png\|300]]
> 
As well, assume the following:
> - The definition of [angular velocity](Angular%20Velocity.md) is $\omega = \frac{v}{r} \Rightarrow v=rw$
> - [Kinetic energy](../Energy%20&%20Work/Kinetic%20Potential%20Energy%20&%20Work-Energy%20Theorem.md) is defined as $K = \frac{1}{2}mv^2$

$$\begin{array}{c} \\

K_ = \sum _{i}\frac{1}{2}m_{i}v_{i}^2 \\ 
v_{i} = r_{i }\omega \\ 
\begin{align*}
K &= \sum _{i}\frac{1}{2}m_{i}(r_{i}\omega)^2 \\ 
&=\frac{1}{2} \omega
{ #2}
 \underbrace{ \sum_{i} m_{i} r_{i}   }_{ I_{0} } \\
&= \frac{1}{2}\omega^2 I_{0}
\end{align*}

\end{array}$$

> [!note]
In this derivation we also define the [moment of inertia](Moment%20of%20Inertia.md) for rotating bodies. $\sum_{i} m_{i} r_{i} =I_{0}$


# Rotational Work-Energy Theorem
> [!warning] Assumptions
To derive an equation to relate [rotational work](Rotational%20Work.md) and kinetic energy. Create an equation to describe work of a rotating body from point a to b. Assume the following:
> - [Rotational work](Rotational%20Work.md) is defined as $W= \int_{a}^b \tau \cdot d\theta$
> - Assume [torque](Torque.md) and [angular displacement](Angular%20Displacement.md) are always in the same direction
> - [Torque](Torque.md) is defined as $\tau = I\alpha$
> - [Angular acceleration](Angular%20Acceleration.md) is defined as $\alpha= \frac{d\omega}{dt}$
> - [Angular velocity](Angular%20Velocity.md) is defined as $\omega = \frac{d\theta}{dt}\Rightarrow d\theta=\omega dt$
> - The [moment of inertia](Moment%20of%20Inertia.md) is the same through time $t_{1}$ and $t_{2}$
> - [Rotational kinetic energy](#Derivation) is defined as $\frac{1}{2}\omega I^2$

$$
\begin{align*}
W &= \int_{t_{1}}^{t_{2}} \tau \cdot d\theta \\ 
&= \int_{t_{1}}^{t_{2}} \tau d\theta \\ 
&= \int_{t_{1}}^{t_{2}}I\alpha d\theta\\
&= I \int_{t_{1}}^{t_{2}} \frac{d\omega}{\cancel{ dt }} (\omega \cancel{ dt }) \\
&= I \int_{t_{1}}^{t_{2}} \omega d\omega \\
&= I \int_{t_{1}}^{t_{2}} \omega d \omega 
\\
&= \frac{1}{2}I[\omega
{ #2}
(t_{2})-\omega
{ #2}
(t_{1})] \\ 
&= \frac{1}{2} I (\omega_{f} - \omega_{i}) \\ 
&= \Delta K
\end{align*}
$$

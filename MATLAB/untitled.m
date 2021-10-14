X=[2 4 4 2 2];
Y=[2 2 4 4 2];
%Square with centre 3,3 and origin 0,0
square00_mat=[X;Y];
figure(1);
plot(X,Y,'b*-');
axis([-5 5 -5 5]);
grid('on');
legend('Square with origin 00');
title('UE199076 Vaibhav Kumar Singh assignment 2');
%Translation of origin to 3,3
substract_mat=[3;3];
square33_mat=square00_mat-substract_mat;
figure(2);
plot(square33_mat(1,1:end),square33_mat(2,1:end),'b+-');
axis([-5 5 -5 5]);
grid('on');
legend('Square with origin 33');
title('UE199076 Vaibhav Kumar Singh assignment 2');
%Scaling
scale_mat=[2 0;0 3];
scaled_square33_mat=scale_mat*square33_mat;
figure(3);
plot(scaled_square33_mat(1,1:end),scaled_square33_mat(2,(1:end)),'r*-');
axis([-5 5 -5 5]);
grid('on');
legend('Scaled square with origin 33')
title('UE199076 Vaibhav Kumar Singh assignment 2')
%Rotation by 90 degree
rotation_mat=[0 -1;1 0];
rotated_scaled_square33_mat=rotation_mat*scaled_square33_mat;
figure(4);
plot(rotated_scaled_square33_mat(1,1:end),rotated_scaled_square33_mat(2,1:end),'ms-');
axis([-5 5 -5 5]);
grid('on');
legend(' Rotation by 90 degree');
title('UE199076 Vaibhav Kumar Singh assignment 2')
%translation back to origin
addition_mat=[3;3];
rotated_scaled_square00_mat=rotated_scaled_square33_mat+addition_mat;
figure(5);
plot(rotated_scaled_square00_mat(1,1:end),rotated_scaled_square00_mat(2,1:end),'gh-');
axis([-7 7 -7 7]);
grid('on');
legend('translation back to origin');
title('UE199076 Vaibhav Kumar Singh assignment 2');
%mirror about line y=x
mirror_mat=[0 1;1 0];
mirrored_rotated_scaled_square00_mat=mirror_mat*rotated_scaled_square00_mat;
figure(6);
plot(mirrored_rotated_scaled_square00_mat(1,1:end),mirrored_rotated_scaled_square00_mat(2,1:end),'kp-');
axis([-7 7 -7 7]);
legend('mirror about line y=x');
title('UE199076 Vaibhav Kumar Singh assignment 2');
grid('on');
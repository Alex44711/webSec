cd /var/lib/jenkins/workspace/webSec
mvn package
mv /var/lib/jenkins/workspace/webSec/webSecurity/target/webSecurity01-1.0.jar /home/ec2-user/webSecurity01-1.0.jar
cd /home/ec2-user
cp /dev/null temp.txt
nohup java -jar webSecurity01-1.0.jar > temp.txt & tail -f temp.txt
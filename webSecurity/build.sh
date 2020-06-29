cd /var/lib/jenkins/workspace/webSec
mvn package
mv /var/lib/jenkins/workspace/webSec/webSecurity/target/webSecurity01-1.0.jar /home/ec2-user/webSecurity01-1.0.jar
rm -rf *
cd /home/ec2-user
cp /dev/null temp.txt
ps -ef | pgrep -f webSecurity01-1.0.jar | xargs kill -s 9
nohup java -jar webSecurity01-1.0.jar >temp.txt &
buildStatus(){
    cat temp.txt | while read line
    do
        if [[ $line == *"Started Application"* ]]
        then
            echo "*******Start Success*******"
        fi
    done
}

cd /var/lib/jenkins/workspace/webSecBlog
mvn package
mv /var/lib/jenkins/workspace/webSecBlog/webSecurity/target/webSecurity01-1.0.jar /home/ec2-user/webSecurity01-1.0.jar
rm -rf *
cd /home/ec2-user
cp /dev/null temp.txt
ps -ef | pgrep -f webSecurity01-1.0.jar | xargs kill -s 9
BUILD_ID=dontKillMe nohup java -jar webSecurity01-1.0.jar >temp.txt &
sleep 20s
echo "Start Status Judge"
buildStatus